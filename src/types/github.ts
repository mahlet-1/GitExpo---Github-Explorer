export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  private: boolean;
}

export type RepoSort = 'stars' | 'forks' | 'updated' | 'name';

export interface RateLimit {
  limit: number;
  remaining: number;
  reset: number;
}

export interface SearchBarProps {
  onSearch: (username: string) => void;
  history: string[];
  onClearHistory: () => void;
  autoFocus?: boolean;
}

export interface SearchHistoryProps {
  history: string[];
  onSelectSearch: (username: string) => void;
  onClearHistory: () => void;
}

export interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}
