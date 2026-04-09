import React from 'react';

const Loader: React.FC = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-3 border-slate-200 border-t-indigo-500 rounded-full animate-spin" />
    </div>
);

export default Loader;
