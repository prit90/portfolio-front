import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle, FiMapPin } from 'react-icons/fi';
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

const ExperiencePage: React.FC = () => (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="navy-gradient py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Work History</p>
                    <h1 className="text-5xl font-black text-white mb-4">Experience</h1>
                    <p className="text-blue-100 max-w-lg">My professional journey and what I've accomplished.</p>
                </motion.div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
            <SectionHeading title="Work Experience" label="Professional" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-pro overflow-hidden"
            >
                {/* Company header */}
                <div className="navy-gradient p-8 text-white">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                            <FiBriefcase size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-black">Fuerte Developers</h3>
                            <p className="text-blue-200 font-semibold mt-0.5">Web Developer Intern</p>
                            <div className="flex flex-wrap gap-4 mt-3 text-blue-100 text-sm">
                                <span className="flex items-center gap-1.5"><FiCalendar size={14} /> December 2024 – June 2025</span>
                                <span className="flex items-center gap-1.5"><FiMapPin size={14} /> Rajkot, Gujarat</span>
                            </div>
                        </div>
                        <span className="tag bg-green-400 text-green-900 self-start">Internship</span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Key Responsibilities</h4>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {responsibilities.map((item, index) => (
                            <motion.div key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-slate-50"
                            >
                                <FiCheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                                <p className="text-sm text-slate-600">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Livewire', 'AJAX', 'Git'].map((t) => (
                                <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
);

export default ExperiencePage;
