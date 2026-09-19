import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import type { GitHubRepo } from '../types/github';

export const RepoDetail: React.FC = () => {
  const { username, repoName } = useParams<{ username: string; repoName: string }>();
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [readme, setReadme] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepoDetails() {
      if (!username || !repoName) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!response.ok) {
          throw new Error(`Could not find repository "${repoName}" for user "${username}".`);
        }
        const repoData: GitHubRepo = await response.json();
        setRepo(repoData);

        const readme = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`, {
          headers: { Accept: 'application/vnd.github.v3.raw' },
        });
        
        if (readme.ok) {
          const readmeText = await readme.text();
          setReadme(readmeText);
        } else {
          setReadme('No README.md available for this repository.');
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred while loading repository details.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRepoDetails();
  }, [username, repoName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-github-accent font-extrabold animate-pulse text-base">Loading repository...</div>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-4">
        <h2 className="text-2xl font-black text-github-text">Repository Not Found</h2>
        <p className="text-github-muted text-sm">{error || "The requested repository could not be loaded."}</p>
        <Link
          to={`/user/${username}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-github-accent text-white rounded-lg text-xs font-bold hover:bg-github-accentHover transition-colors"
        >
          <FaArrowLeft /> Back to Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 select-none">
      <div>
        <Link
          to={`/user/${username}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-github-muted hover:text-github-accent transition-colors"
        >
          <FaArrowLeft /> Back 
        </Link>
      </div>

      <div className="bg-github-surface border border-github-border rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-github-accent">
            {repo.name}
          </h1>
          {repo.description && (
            <p className="text-github-text text-sm mt-1">
              {repo.description}
            </p>
          )}
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 py-2 px-4 bg-github-surface hover:bg-github-accentHover border border-github-border text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
        >
          <span>GitHub</span>
        </a>
      </div>
      
      <div className="bg-github-surface border border-github-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center gap-2 text-github-text font-black text-base border-b border-github-border pb-4">
          <span>README.md</span>
        </div>
        <div className="bg-github-bg border border-github-border rounded-xl p-6 font-mono text-xs text-github-text overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {readme}
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;