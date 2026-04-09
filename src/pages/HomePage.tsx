import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-primary/30">
                            MC
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-accent-light' : 'text-accent'}`}
                    >
                        Hello, I am
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold mb-4"
                    >
                        <span className="gradient-text">Mayur Chavda</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`text-xl md:text-2xl font-medium mb-6 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
                    >
                        Dynamic Web Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`max-w-2xl mx-auto text-lg mb-4 leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
                    >
                        Motivated Web Developer skilled in Laravel, PHP, MySQL, HTML, CSS, Bootstrap, and Livewire.
                        Strong problem-solving and rapid learning abilities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className={`flex items-center justify-center gap-2 mb-8 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
                    >
                        <FiMapPin size={16} />
                        <span>Rajkot, Gujarat</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <Link
                            to="/projects"
                            className="px-8 py-3 rounded-xl gradient-bg text-white font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className={`px-8 py-3 rounded-xl font-medium border-2 transition-all duration-300 hover:-translate-y-0.5 ${isDark
                                ? 'border-dark-border text-dark-text hover:border-primary hover:text-primary'
                                : 'border-light-border text-light-text hover:border-primary hover:text-primary'
                                }`}
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <a href="https://github.com/Mayur142-CODE" target="_blank" rel="noopener noreferrer"
                            className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-card text-dark-muted hover:text-white hover:bg-dark-border' : 'bg-light-card text-light-muted hover:text-light-text hover:bg-light-border'}`}>
                            <FiGithub size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/mayur-chavda1214" target="_blank" rel="noopener noreferrer"
                            className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-card text-dark-muted hover:text-white hover:bg-dark-border' : 'bg-light-card text-light-muted hover:text-light-text hover:bg-light-border'}`}>
                            <FiLinkedin size={22} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={isDark ? 'text-dark-muted' : 'text-light-muted'}
                >
                    <FiArrowDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HomePage;
