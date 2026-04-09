import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';

const education = [
    {
        institution: 'Marwadi University',
        degree: 'B.Tech in Computer Engineering',
        period: '2025 – 2028 (Pursuing)',
        icon: <FiBookOpen size={24} />,
        highlight: true,
    },
    {
        institution: 'RK University',
        degree: 'Diploma in Computer Engineering',
        period: 'CGPA: 9.69',
        icon: <FiAward size={24} />,
        highlight: false,
    },
];

const AboutPage: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionHeading title="About Me" subtitle="Get to know me and my educational background" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-2xl p-8 mb-12 glass ${isDark ? 'glass-dark' : 'glass-light'}`}
                >
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                        I'm <span className="gradient-text font-semibold">Mayur Chavda</span>, a passionate web developer from{' '}
                        <span className="font-semibold">Rajkot, Gujarat</span>. I'm a computer engineering student who loves building
                        elegant, efficient, and user-friendly web applications. With strong skills in both frontend and backend development,
                        I bring ideas to life through clean code and modern design patterns.
                    </p>
                </motion.div>

                <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    🎓 Education
                </h3>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 gradient-bg hidden md:block" />

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="flex gap-6 items-start"
                            >
                                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${edu.highlight
                                        ? 'gradient-bg text-white shadow-primary/30'
                                        : isDark
                                            ? 'bg-dark-card text-primary-light'
                                            : 'bg-light-card text-primary'
                                    }`}>
                                    {edu.icon}
                                </div>
                                <div className={`flex-1 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-dark-card hover:bg-dark-border/50' : 'bg-light-card hover:bg-light-border/50'
                                    }`}>
                                    <h4 className="text-xl font-bold mb-1">{edu.institution}</h4>
                                    <p className={`font-medium ${isDark ? 'text-primary-light' : 'text-primary'}`}>{edu.degree}</p>
                                    <p className={`text-sm mt-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{edu.period}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
