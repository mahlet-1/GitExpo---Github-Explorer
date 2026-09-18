import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RepoCard } from './RepoCard';
import { LanguageFilter } from './LanguageFilter';
import type { GitHubRepo } from '../types/github';

interface RepoListProps {
  repos: GitHubRepo[];
}

export const RepoList: React.FC<RepoListProps> = ({ repos }) => {
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
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'updated' | 'stars' | 'forks' | 'name')}
            className="bg-github-bg border-2 border-github-border rounded-xl px-4 py-2.5 text-sm font-bold text-github-text focus:outline-none focus:border-github-accent transition-all cursor-pointer"
          >
            <option value="updated">Recently Updated</option>
            <option value="stars">Most Stars</option>
            <option value="forks">Most Forks</option>
            <option value="name">Name (A-Z)</option>
          </select>
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
            <RepoCard key={repo.id} repo={repo} />
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