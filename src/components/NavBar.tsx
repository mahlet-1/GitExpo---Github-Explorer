import { FaGithub } from 'react-icons/fa';
import { SearchBar } from '../components/SearchBar';
import type { NavbarProps } from '../types/github';

export const Navbar: React.FC<NavbarProps> = ({
  onSearch,
  history,
  onClearHistory,
  showSearch = true,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-github-bg border-b border-github-border shadow-md px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <FaGithub className="text-3xl text-github-accent transition-transform" />
          <div className="flex flex-col">
            <span className="font-black tracking-wide text-github-accent leading-tight">GitExpo</span>
          </div>
        </div>

        {showSearch && (
          <div className="w-full max-w-sm sm:max-w-md">
            <SearchBar 
              onSearch={onSearch} 
              history={history} 
              onClearHistory={onClearHistory} 
            />
          </div>
        )}

      </div>
    </header>
  );
};