import { FaGithub } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import type { NavbarProps } from '../types/github';

export const Navbar: React.FC<NavbarProps> = ({
  onSearch,
  history,
  onClearHistory,
  showSearch = true,
}) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-github-bg border-b border-github-border shadow-md px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        <div className="flex items-center justify-start gap-4">
          <FaGithub className="text-3xl text-github-accent transition-transform" />
          <div className="flex flex-col">
            <span className="font-black tracking-wide text-github-accent leading-tight">GitExpo</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
        <nav className="hidden md:flex items-center">
          <Link
            to="/"
            className={`relative py-1 px-2 text-sm font-medium transition-colors cursor-default flex items-center gap-1.5 ${
              isHome ? 'text-github-text font-semibold' : 'text-github-muted hover:text-github-text'
            }`}
          >
            Home
            {isHome && (
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-github-accent rounded-full shadow-md" />
            )}
          </Link>
        </nav>
        </div>

        <div className="flex items-center justify-end">
        {showSearch && (
          <div className="w-full max-w-[240px] sm:max-w-xs">
            <SearchBar 
              onSearch={onSearch} 
              history={history} 
              onClearHistory={onClearHistory} 
            />
          </div>
        )}
        </div>
      </div>
    </header>
  );
};