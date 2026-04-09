import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <footer className={`py-8 border-t ${isDark ? 'border-dark-border bg-dark-surface/50' : 'border-light-border bg-light-card/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold gradient-text">Mayur Chavda</p>
                        <p className={`text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                            Dynamic Web Developer
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Mayur142-CODE" target="_blank" rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-all duration-300 hover:gradient-bg hover:text-white ${isDark ? 'text-dark-muted hover:text-white' : 'text-light-muted hover:text-white'}`}>
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/mayur-chavda1214" target="_blank" rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-all duration-300 hover:gradient-bg hover:text-white ${isDark ? 'text-dark-muted hover:text-white' : 'text-light-muted hover:text-white'}`}>
                            <FiLinkedin size={20} />
                        </a>
                        <a href="mailto:mayurchavda@email.com"
                            className={`p-2 rounded-lg transition-all duration-300 hover:gradient-bg hover:text-white ${isDark ? 'text-dark-muted hover:text-white' : 'text-light-muted hover:text-white'}`}>
                            <FiMail size={20} />
                        </a>
                    </div>

                    <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                        Made with <FiHeart className="text-red-500" /> by Mayur Chavda © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
