import { useState } from 'react';
import { FaSearch, FaGithub } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [Search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Search.trim()) {
      onSearch(Search.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-xl mx-auto">
      <div className="relative flex-1">
        <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-github-muted text-lg" />
        <input
          type="text"
          placeholder="Search for username..."
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-github-surface border-2 border-github-border rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-github-text placeholder:text-github-muted focus:outline-none focus:border-github-accent transition-all shadow-lg"
        />
      </div>
      <button
        type="submit"
        aria-label="Search"
        className="flex items-center justify-center aspect-square h-[45px] bg-github-accent text-github-bg rounded-xl hover:bg-github-accentHover transition-all shadow-lg cursor-pointer"
      >
        <FaSearch className="text-md" />
      </button>
    </form>
  );
};