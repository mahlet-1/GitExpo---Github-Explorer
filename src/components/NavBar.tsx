import { FaGithub, FaSearch } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';


export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate () ;
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
        <nav className=" md:flex items-center">
          <Link
            to="/"
            className={`relative py-1 px-2 text-sm font-medium transition-colors cursor-default flex items-center gap-1.5 ${
              isHome ? 'text-github-text font-semibold' : 'text-github-muted font-semibold hover:text-github-text'
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
        <button
            onClick={() => navigate('/search')}
            aria-label="Search"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-github-surface border-2 border-github-border text-github-text hover:text-github-accent hover:border-github-accent transition-all cursor-default shadow-sm"
          >
            <FaSearch className="text-sm" />
          </button>
        </div>
      </div>
    </header>
  );
};