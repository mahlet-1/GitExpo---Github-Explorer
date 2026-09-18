import { FaHistory, FaTrash } from 'react-icons/fa';
import type { SearchHistoryProps } from '../types/github';

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onSelectSearch,
  onClearHistory,
}) => {
  if (history.length === 0) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-2 bg-github-surface border-2 border-github-border rounded-xl shadow-2xl overflow-hidden z-50">
      <div className="flex items-center justify-between px-4 py-2.5 bg-github-accent/30 border-b border-github-border text-xs font-bold text-github-muted tracking-wider uppercase">
        <span className="flex items-center gap-1.5 text-white/85">
          <FaHistory /> Recent Searches
        </span>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            onClearHistory();
          }}
          className="flex items-center gap-1 text-white/85 hover:text-red-400 transition-colors cursor-pointer"
        >
          <FaTrash className="text-[10px] " /> Clear
        </button>
      </div>

      <ul className="max-h-60 overflow-y-auto divide-y divide-github-border/50">
        {history.map((username, index) => (
          <li key={`${username}-${index}`}>
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                onSelectSearch(username);
              }}
              className="w-full text-left px-4 py-3 text-sm font-medium text-github-text hover:bg-github-accent/10 hover:text-github-accent transition-colors flex items-center justify-between group cursor-pointer"
            >
              <span>{username}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};