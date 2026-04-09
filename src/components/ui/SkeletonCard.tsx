import React from 'react';

const SkeletonCard: React.FC = () => (
    <div className="rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm animate-pulse">
        <div className="h-1 bg-slate-200" />
        <div className="p-7">
            <div className="w-12 h-12 rounded-xl bg-slate-200 mb-5" />
            <div className="h-5 bg-slate-200 rounded mb-2 w-3/4" />
            <div className="h-4 bg-slate-100 rounded mb-1 w-full" />
            <div className="h-4 bg-slate-100 rounded mb-5 w-5/6" />
            <div className="flex gap-2">
                <div className="h-5 w-14 bg-slate-100 rounded" />
                <div className="h-5 w-14 bg-slate-100 rounded" />
            </div>
        </div>
    </div>
);

export default SkeletonCard;
