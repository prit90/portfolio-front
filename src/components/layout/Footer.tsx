import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <footer className={`border-t ${isDark ? 'border-dark-border bg-dark-surface/40' : 'border-light-border bg-white/60'}`}>
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs font-bold">PP</div>
                            <span className="font-bold gradient-text font-mono">prit.dev</span>
                        </div>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                            Full Stack Web Developer crafting modern, performant web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>Quick Links</p>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { name: 'About', path: '/about' },
                                { name: 'Skills', path: '/skills' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'Contact', path: '/contact' },
                            ].map((l) => (
                                <Link key={l.path} to={l.path}
                                    className={`text-sm transition-colors hover:text-primary-light ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                                    {l.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>Connect</p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FiGithub size={18} />, href: 'https://github.com/pansuriyaprit709', label: 'GitHub' },
                                { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: <FiMail size={18} />, href: 'mailto:pansuriyaprit709@email.com', label: 'Email' },
                            ].map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    title={s.label}
                                    className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 ${isDark
                                        ? 'bg-dark-card text-dark-muted hover:text-white hover:bg-dark-border'
                                        : 'bg-light-card text-light-muted hover:text-light-text hover:bg-white'
                                    }`}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${isDark ? 'border-dark-border text-dark-muted' : 'border-light-border text-light-muted'}`}>
                    <p>© {new Date().getFullYear()} Prit Pansuriya. All rights reserved.</p>
                    <p className="flex items-center gap-1">Made with <FiHeart className="text-red-400" size={12} /> in Rajkot, Gujarat</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
