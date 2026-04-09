import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const isDark = theme === 'dark';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 glass ${isDark ? 'glass-dark' : 'glass-light'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold gradient-text">
                        {'<MC />'}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                    ? 'gradient-bg text-white'
                                    : isDark
                                        ? 'text-dark-muted hover:text-white hover:bg-dark-card'
                                        : 'text-light-muted hover:text-light-text hover:bg-light-card'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className={`ml-2 p-2 rounded-lg transition-all duration-300 ${isDark ? 'text-yellow-400 hover:bg-dark-card' : 'text-indigo-600 hover:bg-light-card'
                                }`}
                        >
                            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${isDark ? 'text-yellow-400' : 'text-indigo-600'}`}
                        >
                            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden glass ${isDark ? 'glass-dark' : 'glass-light'}`}
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${location.pathname === link.path
                                        ? 'gradient-bg text-white'
                                        : isDark
                                            ? 'text-dark-muted hover:text-white'
                                            : 'text-light-muted hover:text-light-text'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
