import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaLaptopCode, FaEnvelope, FaTerminal } from 'react-icons/fa';
import { TbError404Off } from "react-icons/tb";
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: '404', path: '/404', icon: <TbError404Off className="text-lg" /> },
    { name: 'About', path: '/about', icon: <FaUser className="text-lg" /> },
    { name: 'Skills', path: '/skills', icon: <FaCode className="text-lg" /> },
    { name: 'Projects', path: '/projects', icon: <FaLaptopCode className="text-lg" /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope className="text-lg" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="navbar-modern"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[#78A083]/20 overflow-hidden border-2 border-[#78A083] flex items-center justify-center">
            <img src="/sign.jpg" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <span className="text-xl font-bold text-white relative">
            <span className="bg-gradient-to-r from-[#78A083] to-white bg-clip-text text-transparent">Albez0</span>
            <span className="text-[#50727B]">-</span>
            <span className="text-white">An7h</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`flex items-center gap-2 py-2 px-3 rounded-md transition-colors ${
                location.pathname === item.path 
                  ? 'text-[#78A083] bg-[#35374B]/50' 
                  : 'text-white hover:text-[#78A083]'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          
          {/* Terminal Button */}
          <Link 
            to="/" 
            className="flex items-center gap-2 py-2 px-4 bg-[#78A083] text-white rounded-md hover:bg-[#78A083]/80 transition-colors ml-4"
          >
            <FaTerminal />
            <span>Terminal</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-16 inset-x-0 bg-[#344955]/95 backdrop-blur-md z-50 border-t border-[#50727B]/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                  location.pathname === item.path 
                    ? 'text-[#78A083] bg-[#35374B]/50' 
                    : 'text-white hover:text-[#78A083]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Terminal Button for Mobile */}
            <Link 
              to="/" 
              className="flex items-center gap-3 p-3 bg-[#78A083] text-white rounded-md mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTerminal />
              <span>Back to Terminal</span>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;