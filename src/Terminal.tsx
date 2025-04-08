import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import Typewriter from './components/Typewriter';
import { useNavigate } from 'react-router-dom';

// Properly initialize VANTA
let VANTA: any = null;

interface Command {
    command: string;
    response: string | React.ReactNode;
}

// Define available pages for navigation
const PAGES = {
    home: '/',
    about: '/about',
    projects: '/projects',
    skills: '/skills',
    contact: '/contact',
};

const Terminal = () => {
    // State management
    const [input, setInput] = useState<string>('');
    const [history, setHistory] = useState<Command[]>([]);
    const [bootComplete, setBootComplete] = useState<boolean>(false);
    const [bootProgress, setBootProgress] = useState<number>(0);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(false);
    const [navigateTo, setNavigateTo] = useState<string | null>(null);
    
    // React Router navigation hook
    const navigate = useNavigate();

    // Refs
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const vantaRef = useRef<any>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    // Initialize 3D background with VANTA
    useEffect(() => {
        // Load VANTA dynamically on client side
        if (typeof window !== 'undefined' && !VANTA) {
            import('vanta/dist/vanta.waves.min')
                .then((module) => {
                    VANTA = module.default;
                    if (backgroundRef.current && VANTA) {
                        vantaRef.current = VANTA.WAVES({
                            el: backgroundRef.current,
                            THREE: THREE,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 200.00,
                            minWidth: 200.00,
                            scale: 1.00,
                            scaleMobile: 1.00,
                            color: 0x344955,
                            shininess: 60.00,
                            waveHeight: 20.00,
                            waveSpeed: 1.00,
                            zoom: 0.65
                        });
                    }
                })
                .catch(err => {
                    console.error("Failed to load VANTA:", err);
                });
        }
        
        return () => {
            if (vantaRef.current) vantaRef.current.destroy();
        };
    }, []);

    // Boot simulation
    useEffect(() => {
        if (!bootComplete) {
            const bootTimer = setInterval(() => {
                setBootProgress((prev) => {
                    const newProgress = prev + (Math.random() * 5 + 1);
                    if (newProgress >= 100) {
                        clearInterval(bootTimer);
                        setTimeout(() => {
                            setBootComplete(true);
                            setTimeout(() => setShowWelcomeMessage(true), 500);
                        }, 800);
                        return 100;
                    }
                    return newProgress;
                });
            }, 100);

            return () => clearInterval(bootTimer);
        }
    }, [bootComplete]);

    // Auto-focus and select text in the input field
    useEffect(() => {
        if (bootComplete && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [bootComplete]);

    // Auto-scroll to newest command
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Handle navigation when navigateTo changes
    useEffect(() => {
        if (navigateTo) {
            const timer = setTimeout(() => {
                // Use React Router navigation instead of window.location
                navigate(navigateTo);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [navigateTo, navigate]);

    // Handle terminal click to focus and select input
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    };

    // Process commands
    const processCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        // First, check if this is a navigation command (including content pages that redirect)
        if (Object.keys(PAGES).includes(trimmedCmd) || 
            ['about', 'skills', 'projects', 'contact'].includes(trimmedCmd)) {
            
            // For all navigation commands, just show a simple navigation message
            const response = `Navigating to ${trimmedCmd}...`;
            setHistory((prev) => [...prev, { command: cmd, response }]);
            
            // Set the appropriate navigation path
            let path = PAGES[trimmedCmd as keyof typeof PAGES];
            if (!path && ['about', 'skills', 'projects', 'contact'].includes(trimmedCmd)) {
                path = `/${trimmedCmd}`;
            }
            setNavigateTo(path);
        } else if (trimmedCmd === 'help') {
            const response = (
                <div className="space-y-1 text-[#78A083]">
                    <p>Available commands:</p>
                    <p className="pl-4"><span className="text-[#50727B] font-bold">help</span> - Show this help message</p>
                    <p className="pl-4"><span className="text-[#50727B] font-bold">about</span> - About Albezo</p>
                    <p className="pl-4"><span className="text-[#50727B] font-bold">skills</span> - My technical skills</p>
                    <p className="pl-4"><span className="text-[#50727B] font-bold">projects</span> - View my projects</p>
                    <p className="pl-4"><span className="text-[#50727B] font-bold">contact</span> - Get in touch</p>
                    <p className="pl-4"><span className="text-[#50727B] font-bold">clear</span> - Clear the terminal</p>
                    
                    <p className="mt-2">Navigation commands:</p>
                    {Object.keys(PAGES).map(page => (
                        <p key={page} className="pl-4">
                            <span className="text-[#50727B] font-bold">{page}</span> - Navigate to {page} page
                        </p>
                    ))}
                </div>
            );
            setHistory((prev) => [...prev, { command: cmd, response }]);
        } else if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        } else if (trimmedCmd !== '') {
            // Only add to history if the command isn't empty
            const response = <span className="text-red-400">Unknown command. Type <span className="text-green-400">help</span> for available commands.</span>;
            setHistory((prev) => [...prev, { command: cmd, response }]);
        }
        
        // Focus input after command execution with a slight delay
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }, 10);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            processCommand(input);
            setInput('');
        }
    };

    return (
        <div className="h-screen w-screen overflow-hidden relative bg-[#35374B]">
            {/* Background */}
            <div ref={backgroundRef} className="absolute inset-0 z-0"></div>

            {/* About Button - Added to the top right */}
            <motion.button
                className="absolute top-6 right-6 z-20 px-4 py-2 bg-[#78A083] text-white rounded-md hover:bg-[#78A083]/80 transition-colors shadow-lg flex items-center gap-2"
                onClick={() => navigate('/about')}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                About Me
            </motion.button>

            <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                <AnimatePresence>
                    {!bootComplete ? (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl font-mono text-[#78A083] mb-6">Loading Albezo's DevOS...</h1>
                            <div className="w-64 h-3 bg-[#344955] rounded-full overflow-hidden mx-auto">
                                <motion.div
                                    className="h-full bg-[#50727B]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${bootProgress}%` }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                />
                            </div>
                            <p className="mt-2 text-[#78A083] font-mono">{Math.floor(bootProgress)}%</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="w-full max-w-3xl h-[80vh] bg-[#344955]/80 backdrop-blur-md rounded-lg overflow-hidden border border-[#50727B]/30 shadow-xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 15, stiffness: 70 }}
                        >
                            {/* Terminal Header */}
                            <div className="bg-[#35374B] p-3 border-b border-[#50727B]/30 flex items-center">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 text-center font-mono text-[#78A083]">Terminal</div>
                            </div>

                            {/* Terminal Content */}
                            <div
                                ref={terminalRef}
                                className="h-[calc(100%-48px)] overflow-y-auto p-4 font-mono text-white"
                                onClick={handleTerminalClick}
                            >
                                {/* Welcome Message with Typewriter effect */}
                                {showWelcomeMessage && (
                                    <div className="mb-4 text-[#78A083]">
                                        <Typewriter
                                            words={["Welcome to Albezo's DevOS.\n Click and Type \"help\" to begin."]}
                                            typeSpeed={50}
                                            deleteSpeed={50}
                                            delayBetweenWords={99999}
                                            loop={false}
                                            cursorStyle="command"
                                        />
                                    </div>
                                )}

                                {/* Command History */}
                                {history.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex">
                                            <span className="text-[#50727B] mr-2">❯</span>
                                            <span className="text-white">{item.command}</span>
                                        </div>
                                        <div className="mt-1 ml-6">
                                            {item.response}
                                        </div>
                                    </div>
                                ))}

                                {/* Input Form */}
                                {showWelcomeMessage && (
                                    <form onSubmit={handleSubmit} className="flex items-center">
                                        <span className="text-[#50727B] mr-2">❯</span>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            className="flex-1 bg-transparent outline-none border-none text-white"
                                            spellCheck="false"
                                            autoComplete="off"
                                        />
                                        <span className="cursor command-cursor"></span>
                                    </form>
                                )}

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Terminal;
