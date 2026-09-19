import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { useSearchHistory } from '../hooks/useSearchHistory';

export const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { history, addSearch, clearHistory } = useSearchHistory();

  const handleSearch = (username: string) => {
    const cleanUsername = username.trim();
    if (!cleanUsername) return;
    addSearch(cleanUsername);
    navigate(`/user/${cleanUsername}`);
  };

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 select-none">
      <div className="w-full max-w-xl space-y-6 text-center">
        <h1 className="text-3xl font-extrabold text-github-text tracking-tight">Start Searching for Github Profiles</h1>
        <p className="text-sm text-github-muted font-medium">
          Type any Github username and see their repositiories with their stars and forks.
        </p>
        
        <div className="pt-4">
          <SearchBar 
            onSearch={handleSearch}
            history={history}
            onClearHistory={clearHistory}
            autoFocus={true} 
          />
        </div>
      </div>
    </div>
  );
};

