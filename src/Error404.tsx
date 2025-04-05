import React from 'react'
import { TbError404Off } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page_404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#35374B] text-white px-4 py-12">
            <motion.div 
                className="text-center bg-[#344955]/80 backdrop-blur-md border border-[#50727B]/30 rounded-lg p-10 shadow-xl max-w-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <TbError404Off className="mx-auto text-9xl text-[#78A083] mb-6" />
                <h1 className="text-3xl md:text-4xl font-bold mb-8">
                    I guess You Made A <span className="text-[#78A083]">Typo</span>...
                </h1>
                <Link to={'/'}>
                    <motion.button 
                        className="px-6 py-3 bg-[#78A083] text-white font-medium rounded-lg hover:bg-[#78A083]/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#50727B] focus:ring-opacity-50 shadow-lg"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Go to Home Page
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    )
}

export default Page_404