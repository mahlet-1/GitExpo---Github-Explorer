import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { GitHubUser, RateLimit } from '../types/github';

export function useGitHubUser() {
  const { username } = useParams<{ username: string }>(); 
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState<RateLimit | null>(null);

  const fetchUser = async (username: string) => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const limit = Number(response.headers.get('X-RateLimit-Limit') || 60);
      const remaining = Number(response.headers.get('X-RateLimit-Remaining') || 59);
      const resetHeader = response.headers.get('X-RateLimit-Reset');
      const reset = resetHeader ? Number(resetHeader) * 1000 : Date.now();
      setRateLimit({ limit, remaining, reset });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        throw new Error('Failed to fetch user data');
      }

      const data: GitHubUser = await response.json();
      setUser(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, [username]);

  return { user, loading, error, rateLimit, fetchUser };
};