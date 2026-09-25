import React, { useState, useMemo } from 'react';
import { FaSearch, FaClock } from 'react-icons/fa';
import { RepoCard } from './RepoCard';
import { SortSelect } from './SortSelect';
import { LanguageFilter } from './LanguageFilter';
import type { GitHubRepo, RateLimit } from '../types/github';

interface RepoListProps {
  repos: GitHubRepo[];
  username: string;
  loading?: boolean;   
  error?: string | null
  rateLimit?: RateLimit | null;
}

export const RepoList: React.FC<RepoListProps> = ({ repos, username, rateLimit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'forks' | 'name'>('updated');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const availableLanguages = useMemo(() => {
    return Array.from(
      new Set(repos.map((repo) => repo.language).filter(Boolean))
    ) as string[];
  }, [repos]);

  const formattedRepo = useMemo(() => {
    return repos
      .filter((repo) => {
        const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesLanguage =
          !selectedLanguage ||
          repo.language?.toLowerCase() === selectedLanguage.toLowerCase();

        return matchesSearch && matchesLanguage;
      })
      .sort((a, b) => {
        if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
        if (sortBy === 'forks') return b.forks_count - a.forks_count;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return +new Date(b.updated_at) - +new Date(a.updated_at);

      });
  }, [repos, searchQuery, sortBy, selectedLanguage]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-github-surface p-4 rounded-2xl border-2 border-github-border shadow-xl">
        <div className="relative w-full sm:w-80">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-github-muted" />
          <input
            type="text"
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-github-bg border-2 border-github-border rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-github-text placeholder:text-github-muted focus:outline-none focus:border-github-accent transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        {rateLimit && (
            <div className="flex items-center gap-2 px-3 py-2.5 bg-github-bg border-2 border-github-border rounded-xl text-xs font-bold text-github-muted shadow-inner">
              <FaClock className="text-github-accent" />
              <span className='font-semibold text-white'> {rateLimit.remaining} / {rateLimit.limit} limit left
              </span>
            </div>
          )}
          <SortSelect sortBy={sortBy} onSortChange={setSortBy} />
        </div>
      </div>

      {availableLanguages.length > 0 && (
        <LanguageFilter
          languages={availableLanguages}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={setSelectedLanguage}
        />
      )}

      {formattedRepo.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {formattedRepo.map((repo) => (
            <RepoCard key={repo.id} repo={repo} username={username} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 bg-github-surface border-2 border-github-border rounded-2xl text-center shadow-xl">
          <h3 className="text-lg font-extrabold text-github-text mb-1">No repositories found</h3>
        </div>
      )}
    </div>
  );
};