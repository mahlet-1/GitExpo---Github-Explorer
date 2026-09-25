import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { GitHubRepo } from '../types/github';

export function useGitHubRepos() {
  const { username } = useParams<{ username: string }>();
  const [repo, setRepo] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null >(null);

  useEffect(() => {
    if (!username || !username.trim()) return;
    const fetchRepo = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=30&sort=updated`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch repositories for "${username}".`);
      }

      const data: GitHubRepo[] = await response.json();
      setRepo(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while fetching repositories.');
      }
      setRepo([]);
    } finally {
      setLoading(false);
    }
  };

      fetchRepo();
    }, [username]);

  return { repo, loading, error};
};