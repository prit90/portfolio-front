import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMapPin, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 dot-grid`}>
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-sm font-medium"
                    style={{ borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)', color: '#818cf8' }}
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="w-28 h-28 mx-auto rounded-2xl gradient-bg flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-300">
                        PP
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
                >
                    <span className="gradient-text">Prit Pansuriya</span>
                </motion.h1>

                {/* Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-xl md:text-2xl font-medium mb-6 font-mono ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
                >
                    <span className="text-accent">{'<'}</span>
                    Full Stack Web Developer
                    <span className="text-accent">{' />'}</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`max-w-xl mx-auto text-base md:text-lg mb-4 leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
                >
                    Crafting elegant web experiences with Laravel, React, and modern technologies.
                    Passionate about clean code and intuitive design.
                </motion.p>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className={`flex items-center justify-center gap-1.5 mb-10 text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}
                >
                    <FiMapPin size={14} />
                    <span>Rajkot, Gujarat, India</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-10"
                >
                    <Link
                        to="/projects"
                        className="px-7 py-3 rounded-xl gradient-bg text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="/contact"
                        className={`px-7 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 ${isDark
                            ? 'border-dark-border text-dark-text hover:border-primary hover:text-primary-light'
                            : 'border-light-border text-light-text hover:border-primary hover:text-primary'
                        }`}
                    >
                        Hire Me
                    </Link>
                    <a
                        href="#"
                        className={`flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${isDark ? 'bg-dark-card text-dark-muted hover:text-white' : 'bg-light-card text-light-muted hover:text-light-text'}`}
                    >
                        <FiDownload size={16} /> Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-3"
                >
                    {[
                        { icon: <FiGithub size={20} />, href: 'https://github.com/pansuriyaprit709', label: 'GitHub' },
                        { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                    ].map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 ${isDark ? 'bg-dark-card text-dark-muted hover:text-white hover:bg-dark-border' : 'bg-light-card text-light-muted hover:text-light-text hover:bg-white'}`}>
                            {s.icon} {s.label}
                        </a>
                    ))}
                </motion.div>
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
                    <FiArrowDown size={22} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HomePage;
