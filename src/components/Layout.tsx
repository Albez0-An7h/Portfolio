import React from 'react';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import CursorTrail from './CursorTrail';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#35374B]">
      <CustomCursor />
      <CursorTrail />
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
