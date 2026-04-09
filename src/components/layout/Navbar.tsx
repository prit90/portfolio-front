import React, { useState, useEffect } from 'react';
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
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const isDark = theme === 'dark';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? `glass ${isDark ? 'glass-dark shadow-xl shadow-black/20' : 'glass-light shadow-lg shadow-black/5'}`
            : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs font-bold">PP</div>
                        <span className="text-base font-bold gradient-text font-mono">prit.dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'text-primary-light'
                                    : isDark
                                        ? 'text-dark-muted hover:text-dark-text'
                                        : 'text-light-muted hover:text-light-text'
                                }`}
                            >
                                {location.pathname === link.path && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-lg gradient-bg opacity-15"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-200 ${isDark
                                ? 'text-yellow-400 hover:bg-dark-card'
                                : 'text-indigo-500 hover:bg-light-card'
                            }`}
                        >
                            {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
                        </button>
                        <Link
                            to="/contact"
                            className="px-4 py-2 rounded-lg gradient-bg text-white text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden flex items-center gap-2">
                        <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'text-yellow-400' : 'text-indigo-500'}`}>
                            {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`md:hidden glass ${isDark ? 'glass-dark' : 'glass-light'} mx-4 mb-4 rounded-2xl overflow-hidden`}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${location.pathname === link.path
                                        ? 'gradient-bg text-white'
                                        : isDark
                                            ? 'text-dark-muted hover:text-white hover:bg-dark-card'
                                            : 'text-light-muted hover:text-light-text hover:bg-light-card'
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
