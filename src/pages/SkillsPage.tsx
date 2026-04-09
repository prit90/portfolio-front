import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import Loader from '../components/ui/Loader';
import API from '../services/api';

interface Skill { _id: string; name: string; level: number; }

const skillIcons: Record<string, string> = {
    HTML: '🌐', CSS: '🎨', JavaScript: '⚡', TypeScript: '💎',
    React: '⚛️', 'Node.js': '🟢', Express: '🚂', MongoDB: '🍃',
    Laravel: '🔺', PHP: '🐘', MySQL: '🗄️', Bootstrap: '🅱️',
    Git: '📦', GitHub: '🐙', Livewire: '🔥',
};

const getLevelLabel = (level: number) => {
    if (level >= 85) return { label: 'Expert', color: 'text-emerald-400' };
    if (level >= 70) return { label: 'Advanced', color: 'text-blue-400' };
    if (level >= 55) return { label: 'Intermediate', color: 'text-yellow-400' };
    return { label: 'Learning', color: 'text-orange-400' };
};

const SkillsPage: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        API.get('/skills')
            .then(({ data }) => setSkills(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="pt-24"><Loader /></div>;

    return (
        <section className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-5xl mx-auto">
                <SectionHeading title="My Skills" subtitle="Technologies and tools I work with regularly" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skills.map((skill, index) => {
                        const { label, color } = getLevelLabel(skill.level);
                        return (
                            <motion.div
                                key={skill._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.04 }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                className={`rounded-2xl p-5 text-center group transition-all duration-300 cursor-default ${isDark
                                    ? 'bg-dark-card hover:bg-dark-border/60 hover:shadow-xl hover:shadow-primary/10'
                                    : 'bg-white shadow-sm hover:shadow-xl hover:shadow-primary/10'
                                }`}
                            >
                                <div className="text-3xl mb-3">{skillIcons[skill.name] || '💻'}</div>
                                <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
                                <p className={`text-xs font-medium mb-3 ${color}`}>{label}</p>
                                <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-dark-border' : 'bg-light-border'}`}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.04 + 0.3, duration: 0.8, ease: 'easeOut' }}
                                        className="h-full rounded-full gradient-bg"
                                    />
                                </div>
                                <p className={`text-xs mt-1.5 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{skill.level}%</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
