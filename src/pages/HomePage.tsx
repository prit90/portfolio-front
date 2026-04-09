import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMapPin, FiDownload, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const stats = [
    { value: '10+', label: 'Projects' },
    { value: '7+', label: 'Months Exp.' },
    { value: '14+', label: 'Technologies' },
    { value: '9.69', label: 'CGPA' },
];

const HomePage: React.FC = () => (
    <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 section-alt" />
            <div className="absolute top-0 right-0 w-1/2 h-full navy-gradient opacity-5" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wider"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Available for opportunities
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-4"
                        >
                            Hi, I'm <br />
                            <span className="gradient-text">Prit Pansuriya</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg font-semibold text-blue-700 mb-4"
                        >
                            Full Stack Web Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base text-slate-500 leading-relaxed mb-6 max-w-md"
                        >
                            Crafting elegant, high-performance web applications with Laravel, React, and modern technologies.
                            Passionate about clean code and intuitive design.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="flex items-center gap-1.5 text-sm text-slate-400 mb-8"
                        >
                            <FiMapPin size={14} />
                            <span>Rajkot, Gujarat, India</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            <Link to="/projects"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg navy-gradient text-white font-semibold shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                                View My Work <FiArrowRight size={16} />
                            </Link>
                            <Link to="/contact"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-blue-300 hover:text-blue-700 hover:-translate-y-0.5 transition-all duration-200">
                                <FiMail size={16} /> Contact Me
                            </Link>
                            <a href="#"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all duration-200">
                                <FiDownload size={16} /> Resume
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-3"
                        >
                            {[
                                { icon: <FiGithub size={18} />, href: 'https://github.com/prit90', label: 'GitHub' },
                                { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: <FiMail size={18} />, href: 'mailto:pansuriyaprit709@gmail.com', label: 'Email' },
                            ].map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    title={s.label}
                                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                                    {s.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — Avatar card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-72 h-72 rounded-2xl navy-gradient flex items-center justify-center shadow-2xl shadow-blue-900/20">
                                <div className="text-center text-white">
                                    <div className="text-7xl font-black mb-2">PP</div>
                                    <div className="text-blue-200 text-sm font-medium">Full Stack Developer</div>
                                </div>
                            </div>
                            {/* Floating badges */}
                            <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3">
                                <p className="text-xs text-slate-500 font-medium">Experience</p>
                                <p className="text-lg font-black text-slate-900">7+ Months</p>
                            </div>
                            <div className="absolute -top-4 -right-6 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3">
                                <p className="text-xs text-slate-500 font-medium">Projects</p>
                                <p className="text-lg font-black text-slate-900">10+ Built</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Stats bar */}
        <section className="py-10 px-6 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-4xl font-black gradient-text">{s.value}</p>
                            <p className="text-sm text-slate-500 font-medium mt-1">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Tech stack preview */}
        <section className="py-16 px-6 section-alt">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">Tech Stack</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Laravel', 'PHP', 'React', 'TypeScript', 'Node.js', 'MySQL', 'MongoDB', 'Bootstrap', 'Git'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:border-blue-200 hover:text-blue-700 transition-all">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;
