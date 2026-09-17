import { FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';
import type { GitHubRepo } from '../types/github';

interface RepoCardProps { repo: GitHubRepo; }

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const Formatted = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="p-6 rounded-2xl border-2 border-github-border bg-github-surface hover:border-github-accent transition-all duration-300 flex flex-col justify-between shadow-2xl cursor-pointer group hover:scale-[1.02]">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5 truncate pr-2">
            <FaBook className="text-github-accent text-lg shrink-0" />
            <h3 className="text-github-accent font-extrabold text-lg tracking-wide group-hover:underline truncate">
              {repo.name}
            </h3>
          </div>
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-github-border bg-github-bg text-github-accent shrink-0 shadow-inner">
            {repo.private ? 'Private' : 'Public'}
          </span>
        </div>

        <p className="text-github-text font-medium text-sm mb-6 line-clamp-2 leading-relaxed">
          {repo.description || 'No description available for this repository.'}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-github-muted pt-4 border-t border-github-border">
        <div className="flex items-center gap-5">
          {repo.language && (
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-github-accent shadow-sm shadow-github-accent/50 inline-block" />
              <span className="font-bold text-github-text">
                {repo.language}
              </span>
            </div>
          )}

          {repo.stargazers_count > 0 && (
            <div className="flex items-center gap-1.5 text-github-text">
              <FaStar className="text-yellow-400 text-sm" />
              <span>{repo.stargazers_count}</span>
            </div>
          )}

          {repo.forks_count > 0 && (
            <div className="flex items-center gap-1.5 text-github-text">
              <FaCodeBranch className="text-github-muted text-sm" />
              <span>{repo.forks_count}</span>
            </div>
          )}
        </div>

        <span className="text-github-muted font-semibold">Updated {Formatted}</span>
      </div>
    </div>
  );
};