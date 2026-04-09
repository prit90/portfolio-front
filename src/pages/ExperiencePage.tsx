import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';

const responsibilities = [
    'Built admin panels with role-based access control using Laravel',
    'Developed RESTful APIs for various business modules',
    'Generated dynamic PDF reports for business operations',
    'Implemented AJAX workflows for seamless user experience',
    'Optimized application performance and database queries',
    'Fixed critical bugs and improved overall code quality',
    'Collaborated using Git & GitHub for version control',
];

const ExperiencePage: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-3xl mx-auto">
                <SectionHeading title="Experience" subtitle="My professional journey so far" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-2xl overflow-hidden ${isDark ? 'bg-dark-card' : 'bg-white shadow-sm'}`}
                >
                    {/* Header */}
                    <div className="gradient-bg p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                                    <FiBriefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Fuerte Developers</h3>
                                    <p className="text-white/80 font-medium">Web Developer Intern</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                                <span className="flex items-center gap-1.5"><FiCalendar size={14} /> December 2024 – June 2025</span>
                                <span className="flex items-center gap-1.5"><FiMapPin size={14} /> Rajkot, Gujarat</span>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <h4 className={`text-sm font-semibold uppercase tracking-widest mb-6 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                            Key Responsibilities
                        </h4>
                        <div className="space-y-3">
                            {responsibilities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <FiCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                                    <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{item}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech used */}
                        <div className={`mt-8 pt-6 border-t ${isDark ? 'border-dark-border' : 'border-light-border'}`}>
                            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>Technologies Used</p>
                            <div className="flex flex-wrap gap-2">
                                {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Livewire', 'AJAX', 'Git'].map((t) => (
                                    <span key={t} className={`px-3 py-1 rounded-lg text-xs font-medium border ${isDark ? 'bg-dark-border/50 border-dark-border text-dark-muted' : 'bg-light-card border-light-border text-light-muted'}`}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperiencePage;
