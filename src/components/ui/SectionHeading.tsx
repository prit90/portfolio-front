import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface Props { title: string; subtitle?: string; }

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
        >
            <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight gradient-text">{title}</h2>
            {subtitle && (
                <p className={`text-base max-w-md mx-auto ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{subtitle}</p>
            )}
            <div className="flex items-center justify-center gap-2 mt-5">
                <div className="w-8 h-0.5 rounded-full gradient-bg" />
                <div className="w-2 h-2 rounded-full gradient-bg" />
                <div className="w-8 h-0.5 rounded-full gradient-bg" />
            </div>
        </motion.div>
    );
};

export default SectionHeading;
