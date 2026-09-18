import { useState } from 'react';
import { FaSearch, FaGithub } from 'react-icons/fa';
import { SearchHistory } from './SearchHistory';
import type { SearchBarProps } from '../types/github';

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  history, 
  onClearHistory 
}) => {
  const [Search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Search.trim()) {
      onSearch(Search.trim());
      setIsFocused(false);
    }
  };

  const handleSelect = (username: string) => {
    setSearch(username);
    onSearch(username);
    setIsFocused(false);
  };

  return (
    <div 
      className="relative w-full max-w-xl mx-auto"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsFocused(false);
        }
      }}
    >
      <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full">
        <div className="relative flex-1">
          <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-github-muted text-lg" />
          <input
            type="text"
            placeholder="Search for username..."
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="w-full bg-github-bg border-2 border-github-border rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-github-text placeholder:text-github-muted focus:outline-none focus:border-github-accent transition-all shadow-lg"
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

      {isFocused && history.length > 0 && (
        <SearchHistory 
          history={history} 
          onSelectSearch={handleSelect} 
          onClearHistory={onClearHistory} 
        />
      )}
    </div>
  );
};