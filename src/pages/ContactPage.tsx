import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import API from '../services/api';

const ContactPage: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await API.post('/messages', form);
            toast.success('Message sent! I\'ll get back to you soon.');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            toast.error('Failed to send. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const inputClass = `w-full px-4 py-3 rounded-xl outline-none text-sm transition-all duration-200 focus:ring-2 focus:ring-primary/50 ${isDark
        ? 'bg-dark-surface border border-dark-border text-dark-text placeholder:text-dark-muted/50 focus:border-primary'
        : 'bg-light-card border border-light-border text-light-text placeholder:text-light-muted/50 focus:border-primary'
    }`;

    const contactInfo = [
        { icon: <FiMail size={18} />, label: 'Email', value: 'pansuriyaprit709@gmail.com', href: 'mailto:pansuriyaprit709@gmail.com' },
        { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/pansuriyaprit709', href: 'https://github.com/pansuriyaprit709' },
        { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/prit', href: 'https://linkedin.com' },
    ];

    return (
        <section className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-5xl mx-auto">
                <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's talk." />

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Left info */}
                    <div className="md:col-span-2 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`rounded-2xl p-6 ${isDark ? 'bg-dark-card' : 'bg-white shadow-sm'}`}
                        >
                            <h3 className="font-bold text-lg mb-2">Let's work together</h3>
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                                I'm currently open to freelance projects and full-time opportunities. Feel free to reach out!
                            </p>
                        </motion.div>

                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={i}
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 ${isDark ? 'bg-dark-card hover:bg-dark-border/50' : 'bg-white shadow-sm hover:shadow-md'}`}
                            >
                                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className={`text-xs font-medium ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{info.label}</p>
                                    <p className="text-sm font-semibold">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`md:col-span-3 rounded-2xl p-8 ${isDark ? 'bg-dark-card' : 'bg-white shadow-sm'}`}
                    >
                        <div className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <FiUser className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`} size={15} />
                                    <input type="text" placeholder="Your Name" value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required className={`${inputClass} pl-10`} />
                                </div>
                                <div className="relative">
                                    <FiMail className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`} size={15} />
                                    <input type="email" placeholder="Your Email" value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        required className={`${inputClass} pl-10`} />
                                </div>
                            </div>

                            <div className="relative">
                                <FiMessageSquare className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`} size={15} />
                                <input type="text" placeholder="Subject" value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    required className={`${inputClass} pl-10`} />
                            </div>

                            <textarea placeholder="Your message..." value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required rows={6} className={inputClass} />

                            <motion.button
                                type="submit"
                                disabled={sending}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full py-3.5 rounded-xl gradient-bg text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                            >
                                {sending ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <><FiSend size={16} /> Send Message</>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
