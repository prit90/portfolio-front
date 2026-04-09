import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCode, FiCoffee } from 'react-icons/fi';
import SectionHeading from '../components/ui/SectionHeading';

const education = [
    { institution: 'Marwadi University', degree: 'B.Tech in Computer Engineering', period: '2025 – 2028 (Pursuing)', icon: <FiBookOpen size={20} />, highlight: true },
    { institution: 'RK University', degree: 'Diploma in Computer Engineering', period: 'CGPA: 9.69', icon: <FiAward size={20} />, highlight: false },
];

const stats = [
    { label: 'Projects Built', value: '10+', icon: <FiCode size={22} /> },
    { label: 'Months Experience', value: '7+', icon: <FiCoffee size={22} /> },
    { label: 'Technologies', value: '14+', icon: <FiBookOpen size={22} /> },
    { label: 'CGPA', value: '9.69', icon: <FiAward size={22} /> },
];

const AboutPage: React.FC = () => (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="navy-gradient py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Get to know me</p>
                    <h1 className="text-5xl font-black text-white mb-4">About Me</h1>
                    <p className="text-blue-100 max-w-lg">My background, education, and what drives me as a developer.</p>
                </motion.div>
            </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                {stats.map((s, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="card-pro p-6 text-center"
                    >
                        <div className="w-12 h-12 rounded-xl blue-gradient flex items-center justify-center text-white mx-auto mb-3 shadow-md">
                            {s.icon}
                        </div>
                        <p className="text-3xl font-black gradient-text">{s.value}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">{s.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Bio */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <SectionHeading title="Who Am I?" label="Introduction" />
                    <p className="text-slate-600 leading-relaxed mb-4">
                        I'm <span className="font-semibold text-slate-900">Prit Pansuriya</span>, a passionate full-stack web developer from
                        <span className="font-semibold text-slate-900"> Rajkot, Gujarat</span>. I specialize in building modern, scalable
                        web applications using Laravel, React, and Node.js.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        I love turning complex problems into clean, elegant solutions. With a strong foundation in both frontend and
                        backend development, I bring ideas to life through clean code and thoughtful architecture.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Currently pursuing B.Tech in Computer Engineering at Marwadi University while continuing to grow my skills
                        in modern web technologies.
                    </p>
                </motion.div>

                {/* Skills summary */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <SectionHeading title="Core Skills" label="Expertise" />
                    <div className="space-y-4">
                        {[
                            { skill: 'Laravel & PHP', level: 85 },
                            { skill: 'React & TypeScript', level: 70 },
                            { skill: 'MySQL & MongoDB', level: 80 },
                            { skill: 'Node.js & Express', level: 65 },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-sm font-semibold text-slate-700">{item.skill}</span>
                                    <span className="text-sm font-bold text-blue-600">{item.level}%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                                        className="h-full rounded-full blue-gradient"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Education */}
            <SectionHeading title="Education" label="Academic Background" />
            <div className="space-y-5">
                {education.map((edu, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className={`flex gap-6 items-start p-7 rounded-xl border transition-all ${
                            edu.highlight
                                ? 'border-blue-200 bg-blue-50'
                                : 'border-slate-100 bg-white shadow-sm hover:shadow-md'
                        }`}
                    >
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md ${
                            edu.highlight ? 'navy-gradient text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                            {edu.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-slate-900">{edu.institution}</h4>
                            <p className="font-semibold text-blue-700 mt-0.5">{edu.degree}</p>
                            <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
                        </div>
                        {edu.highlight && (
                            <div className="ml-auto">
                                <span className="tag bg-blue-600 text-white">Current</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

export default AboutPage;
