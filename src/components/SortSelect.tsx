interface SortSelectProps {
  sortBy: 'updated' | 'stars' | 'forks' | 'name';
  onSortChange: (sort: 'updated' | 'stars' | 'forks' | 'name') => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as 'updated' | 'stars' | 'forks' | 'name')}
        className="bg-github-bg border-2 border-github-border rounded-xl px-4 py-2.5 text-sm font-bold text-github-text focus:outline-none focus:border-github-accent transition-all cursor-pointer shadow-inner w-full sm:w-auto"
      >
        <option value="updated">Recently Updated</option>
        <option value="stars">Most Stars</option>
        <option value="forks">Most Forks</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>
  );
};