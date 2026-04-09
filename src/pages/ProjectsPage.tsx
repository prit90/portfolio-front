import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import SkeletonCard from '../components/ui/SkeletonCard';
import API from '../services/api';

interface Project {
    _id: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    image: string;
}

const techColors: Record<string, string> = {
    Laravel: 'bg-red-500/15 text-red-400 border-red-500/20',
    PHP: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
    MySQL: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    JavaScript: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    Bootstrap: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    Livewire: 'bg-pink-500/15 text-pink-400 border-pink-500/20',
    AJAX: 'bg-green-500/15 text-green-400 border-green-500/20',
    React: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    'Node.js': 'bg-lime-500/15 text-lime-400 border-lime-500/20',
    TypeScript: 'bg-blue-600/15 text-blue-300 border-blue-600/20',
    MongoDB: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
};

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        API.get('/projects')
            .then(({ data }) => setProjects(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading title="My Projects" subtitle="A showcase of things I've built" />

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
                    </div>
                ) : projects.length === 0 ? (
                    <div className={`text-center py-20 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                        <FiFolder size={48} className="mx-auto mb-4 opacity-30" />
                        <p>No projects yet.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className={`rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col ${isDark
                                    ? 'bg-dark-card hover:shadow-2xl hover:shadow-primary/10'
                                    : 'bg-white shadow-sm hover:shadow-2xl hover:shadow-primary/10'
                                }`}
                            >
                                {/* Top bar */}
                                <div className="h-1.5 gradient-bg" />

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold gradient-bg text-white shadow-lg shadow-primary/20`}>
                                            {project.title.charAt(0)}
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            {project.githubLink && (
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                                    className={`p-2 rounded-lg transition-all ${isDark ? 'bg-dark-border text-dark-muted hover:text-white' : 'bg-light-card text-light-muted hover:text-light-text'}`}>
                                                    <FiGithub size={16} />
                                                </a>
                                            )}
                                            {project.liveLink && (
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                    className={`p-2 rounded-lg transition-all ${isDark ? 'bg-dark-border text-dark-muted hover:text-white' : 'bg-light-card text-light-muted hover:text-light-text'}`}>
                                                    <FiExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                    <p className={`text-sm leading-relaxed flex-1 mb-4 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech) => (
                                            <span key={tech}
                                                className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${techColors[tech] || 'bg-gray-500/15 text-gray-400 border-gray-500/20'}`}>
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
        </section>
    );
};

export default ProjectsPage;
