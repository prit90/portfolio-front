import React from 'react';
import { motion } from 'framer-motion';

interface Props { title: string; subtitle?: string; label?: string; }

const SectionHeading: React.FC<Props> = ({ title, subtitle, label }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
    >
        {label && (
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">{label}</p>
        )}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">{title}</h2>
        {subtitle && <p className="text-base text-slate-500 max-w-lg">{subtitle}</p>}
        <div className="mt-5 w-16 h-1 rounded-full blue-gradient" />
    </motion.div>
);

export default SectionHeading;
