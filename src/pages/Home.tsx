import { FaGithub, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate(); 
  const handleStartSearching = () => {
    navigate('/search');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        <div className="space-y-4">
          <div className="inline-flex p-4 rounded-2xl bg-github-surface border border-github-border shadow-xl text-github-accent">
            <FaGithub className="text-5xl" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-github-text tracking-tight">
            Explore GitHub with <span className="text-github-accent">GitExpo</span>
          </h1>
          <p className="text-github-muted text-base sm:text-lg max-w-xl mx-auto">
            Discover developer profiles and their repositories.
          </p>

          <div className="pt-2">
            <button
              onClick={handleStartSearching}
              className="inline-flex items-center gap-4 px-6 py-3 bg-github-accent text-github-bg font-bold rounded-xl hover:bg-github-accentHover hover:scale-105 transition-all shadow-lg cursor-pointer "
            >
              Start Searching <FaSearch className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};