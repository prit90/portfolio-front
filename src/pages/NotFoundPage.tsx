import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="w-24 h-24 rounded-2xl navy-gradient flex items-center justify-center text-white text-3xl font-black mx-auto mb-8 shadow-xl">
                404
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-3">Page Not Found</h1>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg navy-gradient text-white font-semibold shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                Back to Home
            </Link>
        </motion.div>
    </div>
);

export default NotFoundPage;
