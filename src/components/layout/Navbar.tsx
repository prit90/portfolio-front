import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

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
    const location = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-md border-b border-slate-100' : 'bg-white/95 backdrop-blur-sm'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg navy-gradient flex items-center justify-center text-white text-sm font-bold shadow">PP</div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 leading-none">Prit Pansuriya</p>
                            <p className="text-xs text-blue-600 font-medium">Full Stack Developer</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link key={link.path} to={link.path}
                                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                                    location.pathname === link.path
                                        ? 'text-blue-700'
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div layoutId="underline"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/contact"
                            className="px-5 py-2 rounded-lg navy-gradient text-white text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                            Get In Touch
                        </Link>
                    </div>

                    {/* Mobile */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
                        {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                        location.pathname === link.path
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-slate-600 hover:bg-slate-50'
                                    }`}>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsOpen(false)}
                                className="block mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center navy-gradient text-white">
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
