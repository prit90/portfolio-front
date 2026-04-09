import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCode, FiCoffee } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';

const education = [
    {
        institution: 'Marwadi University',
        degree: 'B.Tech in Computer Engineering',
        period: '2025 – 2028 (Pursuing)',
        icon: <FiBookOpen size={20} />,
        highlight: true,
    },
    {
        institution: 'RK University',
        degree: 'Diploma in Computer Engineering',
        period: 'CGPA: 9.33',
        icon: <FiAward size={20} />,
        highlight: false,
    },
];

const stats = [
    { label: 'Projects Built', value: '10+', icon: <FiCode size={20} /> },
    { label: 'Months Experience', value: '7+', icon: <FiCoffee size={20} /> },
    { label: 'Technologies', value: '14+', icon: <FiBookOpen size={20} /> },
    { label: 'CGPA', value: '9.69', icon: <FiAward size={20} /> },
];

const AboutPage: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionHeading title="About Me" subtitle="A little about who I am and my journey" />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-2xl p-5 text-center ${isDark ? 'bg-dark-card' : 'bg-white shadow-sm'}`}
                        >
                            <div className="flex justify-center mb-2 text-primary-light">{s.icon}</div>
                            <p className="text-2xl font-black gradient-text">{s.value}</p>
                            <p className={`text-xs mt-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-2xl p-8 mb-12 ${isDark ? 'bg-dark-card' : 'bg-white shadow-sm'}`}
                >
                    <h3 className="text-lg font-bold mb-4 gradient-text">Who am I?</h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                        I'm <span className={`font-semibold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Prit Pansuriya</span>, a passionate full-stack web developer from{' '}
                        <span className={`font-semibold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Rajkot, Gujarat</span>. I specialize in building
                        modern, scalable web applications using Laravel, React, and Node.js. I love turning complex problems into
                        clean, elegant solutions and I'm always eager to learn new technologies.
                    </p>
                    <p className={`text-base leading-relaxed mt-4 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                        With a strong foundation in both frontend and backend development, I bring ideas to life through
                        clean code, thoughtful architecture, and attention to detail.
                    </p>
                </motion.div>

                {/* Education */}
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Education</h3>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`flex gap-5 items-start p-6 rounded-2xl transition-all duration-300 ${isDark ? 'bg-dark-card hover:bg-dark-border/40' : 'bg-white shadow-sm hover:shadow-md'}`}
                        >
                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${edu.highlight ? 'gradient-bg text-white shadow-lg shadow-primary/30' : isDark ? 'bg-dark-border text-primary-light' : 'bg-light-card text-primary'}`}>
                                {edu.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{edu.institution}</h4>
                                <p className={`font-medium text-sm mt-0.5 ${isDark ? 'text-primary-light' : 'text-primary'}`}>{edu.degree}</p>
                                <p className={`text-sm mt-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{edu.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
