import { FaGithub, FaCode, FaLaptopCode, FaSearch } from 'react-icons/fa';

export const Home: React.FC = () => {
  const handleStartSearching = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
          
          <div className="bg-github-surface border border-github-border p-5 rounded-xl space-y-2">
            <FaLaptopCode className="text-github-accent text-xl" />
            <h3 className="font-bold text-github-text text-sm">Search for any developer</h3>
            <p className="text-github-muted text-xs leading-relaxed">
              Check out their whole profile on GitHub.
            </p>
          </div>

          <div className="bg-github-surface border border-github-border p-5 rounded-xl space-y-2">
            <FaCode className="text-github-accent text-xl" />
            <h3 className="font-bold text-github-text text-sm">Search Repositories</h3>
            <p className="text-github-muted text-xs leading-relaxed">
              Filter repositories by programming languages, star counts, forks, and sorting order.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};