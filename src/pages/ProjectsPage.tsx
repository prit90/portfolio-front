import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import SectionHeading from '../components/ui/SectionHeading';
import SkeletonCard from '../components/ui/SkeletonCard';
import API from '../services/api';

interface Project {
    _id: string; title: string; description: string;
    technologies: string[]; githubLink: string; liveLink: string;
}

const techColors: Record<string, string> = {
    Laravel: 'bg-red-50 text-red-700',
    PHP: 'bg-indigo-50 text-indigo-700',
    MySQL: 'bg-blue-50 text-blue-700',
    JavaScript: 'bg-yellow-50 text-yellow-700',
    Bootstrap: 'bg-purple-50 text-purple-700',
    Livewire: 'bg-pink-50 text-pink-700',
    AJAX: 'bg-green-50 text-green-700',
    React: 'bg-cyan-50 text-cyan-700',
    'Node.js': 'bg-lime-50 text-lime-700',
    TypeScript: 'bg-blue-50 text-blue-800',
    MongoDB: 'bg-emerald-50 text-emerald-700',
};

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.get('/projects').then(({ data }) => setProjects(data)).catch(console.error).finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="navy-gradient py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Portfolio</p>
                        <h1 className="text-5xl font-black text-white mb-4">My Projects</h1>
                        <p className="text-blue-100 max-w-lg">A showcase of things I've designed and built.</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <FiFolder size={48} className="mx-auto mb-4 opacity-30" />
                        <p>No projects yet.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card-pro group flex flex-col overflow-hidden"
                            >
                                {/* Top accent */}
                                <div className="h-1 navy-gradient" />

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="flex items-start justify-between mb-5">
                                        <div className="w-12 h-12 rounded-xl navy-gradient flex items-center justify-center text-white text-lg font-black shadow-md">
                                            {project.title.charAt(0)}
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            {project.githubLink && (
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-200 transition-all">
                                                    <FiGithub size={16} />
                                                </a>
                                            )}
                                            {project.liveLink && (
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-200 transition-all">
                                                    <FiExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{project.description}</p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech) => (
                                            <span key={tech}
                                                className={`tag ${techColors[tech] || 'bg-slate-50 text-slate-600'}`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
