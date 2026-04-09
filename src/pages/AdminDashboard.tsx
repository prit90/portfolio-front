import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFolder, FiMessageSquare, FiStar, FiPlus, FiTrash2, FiEdit, FiLogOut, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import API from '../services/api';
import Loader from '../components/ui/Loader';

interface Project {
    _id: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
}

interface Skill {
    _id: string;
    name: string;
    level: number;
}

interface Message {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

type Tab = 'dashboard' | 'projects' | 'skills' | 'messages';

const AdminPage: React.FC = () => {
    const [tab, setTab] = useState<Tab>('dashboard');
    const [projects, setProjects] = useState<Project[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [projectForm, setProjectForm] = useState({
        title: '', description: '', technologies: '', githubLink: '', liveLink: '',
    });
    const [skillForm, setSkillForm] = useState({ name: '', level: 80 });
    const { theme } = useTheme();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const isDark = theme === 'dark';

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = async () => {
        try {
            const [pRes, sRes, mRes] = await Promise.all([
                API.get('/projects'),
                API.get('/skills'),
                API.get('/messages'),
            ]);
            setProjects(pRes.data);
            setSkills(sRes.data);
            setMessages(mRes.data);
        } catch (error) {
            toast.error('Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    const handleProjectSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            ...projectForm,
            technologies: projectForm.technologies.split(',').map((t) => t.trim()).filter(Boolean),
        };
        try {
            if (editingProject) {
                await API.put(`/projects/${editingProject._id}`, payload);
                toast.success('Project updated!');
            } else {
                await API.post('/projects', payload);
                toast.success('Project added!');
            }
            setShowProjectForm(false);
            setEditingProject(null);
            setProjectForm({ title: '', description: '', technologies: '', githubLink: '', liveLink: '' });
            fetchAll();
        } catch {
            toast.error('Failed to save project');
        }
    };

    const handleDeleteProject = async (id: string) => {
        if (!confirm('Delete this project?')) return;
        try {
            await API.delete(`/projects/${id}`);
            toast.success('Project deleted');
            fetchAll();
        } catch {
            toast.error('Failed to delete project');
        }
    };

    const handleEditProject = (p: Project) => {
        setEditingProject(p);
        setProjectForm({
            title: p.title,
            description: p.description,
            technologies: p.technologies.join(', '),
            githubLink: p.githubLink,
            liveLink: p.liveLink,
        });
        setShowProjectForm(true);
    };

    const handleAddSkill = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await API.post('/skills', skillForm);
            toast.success('Skill added!');
            setSkillForm({ name: '', level: 80 });
            fetchAll();
        } catch {
            toast.error('Failed to add skill');
        }
    };

    const handleDeleteSkill = async (id: string) => {
        try {
            await API.delete(`/skills/${id}`);
            toast.success('Skill deleted');
            fetchAll();
        } catch {
            toast.error('Failed to delete skill');
        }
    };

    const handleDeleteMessage = async (id: string) => {
        try {
            await API.delete(`/messages/${id}`);
            toast.success('Message deleted');
            fetchAll();
        } catch {
            toast.error('Failed to delete message');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        toast.success('Logged out');
    };

    const cardClass = `rounded-2xl p-6 ${isDark ? 'bg-dark-card' : 'bg-white shadow-md'}`;
    const inputClass = `w-full px-4 py-2.5 rounded-xl outline-none text-sm transition-all focus:ring-2 focus:ring-primary ${isDark ? 'bg-dark-surface border border-dark-border text-dark-text' : 'bg-light-card border border-light-border text-light-text'
        }`;

    const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
        { key: 'dashboard', label: 'Dashboard', icon: <FiFolder /> },
        { key: 'projects', label: 'Projects', icon: <FiFolder /> },
        { key: 'skills', label: 'Skills', icon: <FiStar /> },
        { key: 'messages', label: 'Messages', icon: <FiMessageSquare /> },
    ];

    if (loading) return <div className="pt-24"><Loader /></div>;

    return (
        <section className="min-h-screen pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                    <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
                    <button onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all text-sm font-medium">
                        <FiLogOut /> Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {tabs.map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setTab(t.key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${tab === t.key
                                    ? 'gradient-bg text-white shadow-lg shadow-primary/20'
                                    : isDark
                                        ? 'bg-dark-card text-dark-muted hover:text-white'
                                        : 'bg-light-card text-light-muted hover:text-light-text'
                                }`}
                        >
                            {t.icon} {t.label}
                        </button>
                    ))}
                </div>

                {/* Dashboard Stats */}
                {tab === 'dashboard' && (
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { label: 'Total Projects', value: projects.length, color: 'from-indigo-500 to-purple-500', icon: <FiFolder size={28} /> },
                            { label: 'Total Skills', value: skills.length, color: 'from-cyan-500 to-blue-500', icon: <FiStar size={28} /> },
                            { label: 'Total Messages', value: messages.length, color: 'from-pink-500 to-rose-500', icon: <FiMessageSquare size={28} /> },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-2xl p-6 bg-gradient-to-br ${stat.color} text-white shadow-xl`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white/70 text-sm font-medium">{stat.label}</p>
                                        <p className="text-4xl font-bold mt-1">{stat.value}</p>
                                    </div>
                                    <div className="p-3 bg-white/20 rounded-xl">{stat.icon}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Projects Tab */}
                {tab === 'projects' && (
                    <div>
                        <button
                            onClick={() => { setShowProjectForm(true); setEditingProject(null); setProjectForm({ title: '', description: '', technologies: '', githubLink: '', liveLink: '' }); }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-medium mb-6 shadow-lg shadow-primary/20"
                        >
                            <FiPlus /> Add Project
                        </button>

                        {showProjectForm && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`${cardClass} mb-6`}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold">{editingProject ? 'Edit Project' : 'New Project'}</h3>
                                    <button onClick={() => setShowProjectForm(false)} className="text-red-400 hover:text-red-300"><FiX size={20} /></button>
                                </div>
                                <form onSubmit={handleProjectSubmit} className="space-y-4">
                                    <input placeholder="Title" value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} required className={inputClass} />
                                    <textarea placeholder="Description" value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} required rows={3} className={inputClass} />
                                    <input placeholder="Technologies (comma-separated)" value={projectForm.technologies} onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })} required className={inputClass} />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input placeholder="GitHub Link" value={projectForm.githubLink} onChange={(e) => setProjectForm({ ...projectForm, githubLink: e.target.value })} className={inputClass} />
                                        <input placeholder="Live Link" value={projectForm.liveLink} onChange={(e) => setProjectForm({ ...projectForm, liveLink: e.target.value })} className={inputClass} />
                                    </div>
                                    <button type="submit" className="px-6 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium">
                                        {editingProject ? 'Update' : 'Create'}
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        <div className="space-y-4">
                            {projects.map((p) => (
                                <div key={p._id} className={`${cardClass} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg">{p.title}</h4>
                                        <p className={`text-sm mt-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{p.description.substring(0, 100)}...</p>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {p.technologies.map((t) => (
                                                <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary-light">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 flex-shrink-0">
                                        <button onClick={() => handleEditProject(p)} className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"><FiEdit size={16} /></button>
                                        <button onClick={() => handleDeleteProject(p._id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"><FiTrash2 size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills Tab */}
                {tab === 'skills' && (
                    <div>
                        <form onSubmit={handleAddSkill} className={`${cardClass} mb-6 flex flex-col sm:flex-row gap-4 items-end`}>
                            <div className="flex-1 w-full">
                                <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>Skill Name</label>
                                <input value={skillForm.name} onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })} required className={inputClass} />
                            </div>
                            <div className="w-full sm:w-32">
                                <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>Level (%)</label>
                                <input type="number" min={0} max={100} value={skillForm.level} onChange={(e) => setSkillForm({ ...skillForm, level: Number(e.target.value) })} className={inputClass} />
                            </div>
                            <button type="submit" className="px-6 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium whitespace-nowrap">
                                <FiPlus className="inline mr-1" /> Add
                            </button>
                        </form>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skills.map((s) => (
                                <div key={s._id} className={`${cardClass} flex items-center justify-between`}>
                                    <div>
                                        <p className="font-semibold">{s.name}</p>
                                        <div className={`w-24 h-1.5 rounded-full mt-2 overflow-hidden ${isDark ? 'bg-dark-border' : 'bg-light-border'}`}>
                                            <div className="h-full gradient-bg rounded-full" style={{ width: `${s.level}%` }} />
                                        </div>
                                        <p className={`text-xs mt-1 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{s.level}%</p>
                                    </div>
                                    <button onClick={() => handleDeleteSkill(s._id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
                                        <FiTrash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Messages Tab */}
                {tab === 'messages' && (
                    <div className="space-y-4">
                        {messages.length === 0 && (
                            <p className={`text-center py-12 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>No messages yet.</p>
                        )}
                        {messages.map((m) => (
                            <div key={m._id} className={`${cardClass}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold">{m.subject}</h4>
                                        <p className={`text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                                            From: {m.name} ({m.email})
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                                            {new Date(m.createdAt).toLocaleDateString()}
                                        </span>
                                        <button onClick={() => handleDeleteMessage(m._id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
                                            <FiTrash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                                <p className={`text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{m.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AdminPage;
