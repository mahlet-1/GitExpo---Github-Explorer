import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 select-none space-y-6">
      <div className="w-20 h-20 rounded-2xl bg-github-surface border-2 border-github-border flex items-center justify-center shadow-xl">
        <FaExclamationTriangle className="text-3xl text-yellow-500" />
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-black text-github-text">Page Not Found</h1>
        <p className="text-github-muted text-sm leading-relaxed">
          The page or repository you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
      </div>

      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-5 py-3 bg-github-surface hover:bg-github-accentHover border border-github-border text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-105"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;