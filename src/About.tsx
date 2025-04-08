import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="about-page">
            <motion.div
                className="max-w-4xl mx-auto py-10 px-6 md:px-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="flex flex-col items-center mb-16">
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-[#78A083] tracking-tight text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        About <span className="text-white underline decoration-[#78A083] decoration-4 underline-offset-8">Me</span>
                    </motion.h1>

                    <motion.div
                        className="max-w-3xl mx-auto leading-relaxed text-lg md:text-xl text-center mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <p className="mb-6 font-light">
                            Hey, I'm <span className="text-[#78A083] font-medium">Albezo</span> — 19, curious since forever, coding since it started feeling like magic.
                        </p>
                        
                        <div className="mb-6 relative pl-6 border-l-4 border-[#78A083]/50 text-left italic">
                            <p>I'm a computer science student at Newton School of Technology, with a passion for building things that make a difference. This is the chaotic, exciting, slightly nerdy timeline of how I got here.</p>
                        </div>
                        
                        <p className="text-[#78A083] text-2xl font-bold mt-10 flex items-center justify-center gap-3">
                            My journey so far <span className="animate-bounce inline-block">👇</span>
                        </p>
                    </motion.div>

                    <div className="flex items-center justify-center w-full mb-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden border-4 border-[#78A083] shadow-2xl shadow-[#78A083]/20 rounded-full"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src="/images/profile-pic.jpeg"
                                alt="Albezo"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Personal Information */}
                    <motion.div 
                        className="w-full max-w-md mx-auto mb-12 bg-[#344955]/80 backdrop-blur-md rounded-lg overflow-hidden border border-[#50727B]/30 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#78A083] mb-4 text-center">Personal Info</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center border-b border-[#50727B]/30 pb-2">
                                    <span className="font-medium text-[#78A083] min-w-24">Name</span>
                                    <span className="text-white">Ansh Kumar</span>
                                </div>
                                
                                <div className="flex items-center border-b border-[#50727B]/30 pb-2">
                                    <span className="font-medium text-[#78A083] min-w-24">D.O.B</span>
                                    <span className="text-white">07/09/2006</span>
                                </div>
                                
                                <div className="flex items-center border-b border-[#50727B]/30 pb-2">
                                    <span className="font-medium text-[#78A083] min-w-24">Address</span>
                                    <span className="text-white">Pune, India</span>
                                </div>
                                
                                <div className="flex items-center pb-2">
                                    <span className="font-medium text-[#78A083] min-w-24">College</span>
                                    <span className="text-white">Newton School of Technology</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-center">
                                <motion.a
                                    href="/Ansh_Kumar_Resume.pdf"
                                    download
                                    className="px-6 py-3 bg-[#78A083] text-white font-medium rounded-lg hover:bg-[#78A083]/80 transition-colors duration-300 flex items-center gap-2 shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download CV
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-[#50727B] pl-8 ml-4 md:ml-8 space-y-12">
                    {/* 2013 */}
                    <TimelineItem year="2013" title="Origins">
                        <p>Got my first PC.</p>
                        <p>Ctrl+C, Ctrl+V = elite skills. Life was simple.</p>
                    </TimelineItem>

                    {/* 2014-2015 */}
                    <TimelineItem year="2014–2015" title="The Offline Explorer">
                        <p>No internet, no problem.</p>
                        <p>Poked around the PC, discovered games, learned how to connect all the wires to make it work.</p>
                        <p>No clue what I was doing, but it felt awesome.</p>
                    </TimelineItem>

                    {/* 2016-2017 */}
                    <TimelineItem year="2016–2017" title="Hello HTML">
                        <p>School introduced HTML.</p>
                        <p>Built my first website. Looked like it time-traveled from 2005. Still proud.</p>
                    </TimelineItem>

                    {/* 2018 */}
                    <TimelineItem year="2018" title="Enter Java">
                        <p>School started teaching Java.</p>
                        <p>Typed System.out.println("hello world"); and felt like a wizard.</p>
                    </TimelineItem>

                    {/* 2019 */}
                    <TimelineItem year="2019" title="Problem Solver Mode">
                        <p>Started writing small programs to solve problems.</p>
                        <p>Didn't always work, but hey, progress!</p>
                    </TimelineItem>

                    {/* 2020-2022 */}
                    <TimelineItem year="2020–2022" title="Covid Hit">
                        <p>Sad times. But hey, got a new laptop and internet (thanks, online classes).</p>
                        <p>Spent time wandering the web, learning, watching, absorbing everything tech.</p>
                    </TimelineItem>

                    {/* 2023-2024 */}
                    <TimelineItem year="2023–2024" title="The JEE Phase">
                        <p>The grind was real.</p>
                        <p>But the hunger to build was still alive in the background.</p>
                    </TimelineItem>

                    {/* 2024 */}
                    <TimelineItem year="2024" title="A New Chapter">
                        <p>Joined Newton School of Technology.</p>
                        <p>Started diving into AI, and realized — yo, code can actually think?!</p>
                    </TimelineItem>

                    {/* 2024-Now */}
                    <TimelineItem year="2024–Now" title="The Builder Era">
                        <p>Made a bunch of personal projects — some useful, some weird, all fun.</p>
                        <p>Realized I love building over perfecting.</p>
                        <p>Now I'm constantly experimenting, shipping fast, and breaking things (then fixing them better).</p>
                    </TimelineItem>
                </div>

                {/* Quotes */}
                <motion.div
                    className="mt-20 bg-[#50727B]/30 p-8 rounded-xl border border-[#78A083] shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#78A083]">Quotes I try to live by:</h3>
                    <div className="space-y-6">
                        <blockquote className="italic border-l-4 border-[#78A083] pl-6 py-2 text-lg bg-[#35374B]/50 rounded-r-lg">
                            "If you don't sacrifice for what you want, what you want becomes the sacrifice."
                        </blockquote>
                        <blockquote className="italic border-l-4 border-[#78A083] pl-6 py-2 text-lg bg-[#35374B]/50 rounded-r-lg">
                            "Don't expect to make a change if you didn't make one."
                        </blockquote>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// Timeline item component for reusability
const TimelineItem = ({ year, title, children }: { year: string; title: string; children: React.ReactNode }) => (
    <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
    >
        {/* Year marker */}
        <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-[#78A083] flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="mb-2">
            <span className="bg-[#50727B] text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                {year}
            </span>
        </div>

        <h3 className="text-2xl font-bold text-[#78A083] mb-3">{title}</h3>
        <div className="text-white mb-6 space-y-2 leading-relaxed pl-1">
            {children}
        </div>

        {/* Divider */}
        <div className="border-b border-dashed border-[#78A083] pt-3"></div>
    </motion.div>
);

export default About;
