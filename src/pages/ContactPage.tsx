import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import toast from 'react-hot-toast';
import SectionHeading from '../components/ui/SectionHeading';
import API from '../services/api';

const ContactPage: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await API.post('/messages', form);
            toast.success('Message sent successfully!');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            toast.error('Failed to send. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const inputClass = `w-full px-4 py-3 rounded-lg outline-none text-sm transition-all bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-50`;

    const contactInfo = [
        { icon: <FiMail size={20} />, label: 'Email', value: 'pansuriyaprit709@gmail.com', href: 'mailto:pansuriyaprit709@gmail.com' },
        { icon: <FiGithub size={20} />, label: 'GitHub', value: 'github.com/prit90', href: 'https://github.com/prit90' },
        { icon: <FiLinkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/prit', href: 'https://linkedin.com' },
        { icon: <FiMapPin size={20} />, label: 'Location', value: 'Rajkot, Gujarat, India', href: '#' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="navy-gradient py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Let's Talk</p>
                        <h1 className="text-5xl font-black text-white mb-4">Get In Touch</h1>
                        <p className="text-blue-100 max-w-lg">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-5 gap-10">
                    {/* Left */}
                    <div className="md:col-span-2">
                        <SectionHeading title="Contact Info" label="Reach Out" />

                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, i) => (
                                <motion.a key={i} href={info.href} target={info.href !== '#' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
                                >
                                    <div className="w-11 h-11 rounded-xl navy-gradient flex items-center justify-center text-white flex-shrink-0 shadow-md">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{info.label}</p>
                                        <p className="text-sm font-semibold text-slate-700 mt-0.5">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-6 rounded-xl navy-gradient text-white">
                            <h4 className="font-bold text-lg mb-2">Open to Work</h4>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                I'm currently available for freelance projects and full-time opportunities. Let's build something great together.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <SectionHeading title="Send a Message" label="Contact Form" />
                        <form onSubmit={handleSubmit} className="card-pro p-8">
                            <div className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                                        <div className="relative">
                                            <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                                            <input type="text" placeholder="John Doe" value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                required className={`${inputClass} pl-10`} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                                        <div className="relative">
                                            <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                                            <input type="email" placeholder="john@example.com" value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                required className={`${inputClass} pl-10`} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Subject</label>
                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                                        <input type="text" placeholder="Project Inquiry" value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            required className={`${inputClass} pl-10`} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                                    <textarea placeholder="Tell me about your project..." value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        required rows={6} className={inputClass} />
                                </div>

                                <motion.button type="submit" disabled={sending}
                                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                                    className="w-full py-4 rounded-lg navy-gradient text-white font-bold shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {sending ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <><FiSend size={16} /> Send Message</>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
