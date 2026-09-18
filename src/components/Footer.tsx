import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-github-bg border-t border-github-border mt-auto py-8 px-6 text-github-muted text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-github-bg border border-github-border flex items-center justify-center text-github-accent shadow-inner">
            <FaGithub className="text-lg" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-github-accent text-sm tracking-wide">GitExpo</span>
            <span className="text-[11px] text-github-muted">A web for exploring github</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-github-muted font-medium text-center md:text-right">
          <span>&copy; {new Date().getFullYear()} GitExpo. All rights reserved </span>
        </div>

      </div>
    </footer>
  );
};