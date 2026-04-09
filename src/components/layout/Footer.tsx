import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => (
    <footer className="navy-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
            <div className="grid md:grid-cols-3 gap-10 mb-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white text-sm font-bold">PP</div>
                        <div>
                            <p className="font-bold text-white">Prit Pansuriya</p>
                            <p className="text-xs text-blue-200">Full Stack Developer</p>
                        </div>
                    </div>
                    <p className="text-sm text-blue-100 leading-relaxed">
                        Building modern, scalable web applications with a focus on clean code and great user experience.
                    </p>
                </div>

                <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-5 text-blue-200">Navigation</p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {[
                            { name: 'About', path: '/about' },
                            { name: 'Skills', path: '/skills' },
                            { name: 'Projects', path: '/projects' },
                            { name: 'Experience', path: '/experience' },
                            { name: 'Contact', path: '/contact' },
                        ].map((l) => (
                            <Link key={l.path} to={l.path} className="text-sm text-blue-100 hover:text-white transition-colors">{l.name}</Link>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-5 text-blue-200">Connect</p>
                    <div className="space-y-3">
                        {[
                            { icon: <FiGithub size={16} />, label: 'github.com/prit90', href: 'https://github.com/prit90' },
                            { icon: <FiLinkedin size={16} />, label: 'linkedin.com/in/prit', href: 'https://linkedin.com' },
                            { icon: <FiMail size={16} />, label: 'pansuriyaprit709@gmail.com', href: 'mailto:pansuriyaprit709@gmail.com' },
                        ].map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-blue-100 hover:text-white transition-colors">
                                <span className="text-blue-300">{s.icon}</span>
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200">
                <p>© {new Date().getFullYear()} Prit Pansuriya. All rights reserved.</p>
                <p>Rajkot, Gujarat, India</p>
            </div>
        </div>
    </footer>
);

export default Footer;
