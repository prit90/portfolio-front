import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NotFoundPage: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="min-h-screen flex items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="text-8xl font-black gradient-text mb-4">404</p>
                <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
                <p className={`mb-8 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                    The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="px-6 py-3 rounded-xl gradient-bg text-white font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 inline-block">
                    Back to Home
                </Link>
            </motion.div>
        </section>
    );
};

export default NotFoundPage;
