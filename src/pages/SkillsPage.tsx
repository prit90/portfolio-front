import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

const categories = [
    { label: 'All', filter: () => true },
    { label: 'Frontend', filter: (n: string) => ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap'].includes(n) },
    { label: 'Backend', filter: (n: string) => ['PHP', 'Laravel', 'Node.js', 'Express', 'Livewire'].includes(n) },
    { label: 'Database', filter: (n: string) => ['MySQL', 'MongoDB'].includes(n) },
    { label: 'Tools', filter: (n: string) => ['Git', 'GitHub'].includes(n) },
];

const SkillsPage: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(0);

    useEffect(() => {
        API.get('/skills').then(({ data }) => setSkills(data)).catch(console.error).finally(() => setLoading(false));
    }, []);

    const filtered = skills.filter(categories[active].filter);

    if (loading) return <div className="pt-24"><Loader /></div>;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="navy-gradient py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">What I know</p>
                        <h1 className="text-5xl font-black text-white mb-4">My Skills</h1>
                        <p className="text-blue-100 max-w-lg">Technologies and tools I work with on a daily basis.</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((cat, i) => (
                        <button key={i} onClick={() => setActive(i)}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                                active === i
                                    ? 'navy-gradient text-white shadow-md'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-700'
                            }`}>
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filtered.map((skill, index) => (
                        <motion.div key={skill._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.04 }}
                            whileHover={{ y: -5 }}
                            className="card-pro p-5 text-center cursor-default"
                        >
                            <div className="text-3xl mb-3">{skillIcons[skill.name] || '💻'}</div>
                            <h3 className="font-bold text-sm text-slate-800 mb-3">{skill.name}</h3>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 + 0.2, duration: 0.7 }}
                                    className="h-full rounded-full blue-gradient"
                                />
                            </div>
                            <p className="text-xs text-slate-400 font-semibold mt-2">{skill.level}%</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
