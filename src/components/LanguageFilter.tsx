import type { LanguageFilterProps } from '../types/github';

export const LanguageFilter: React.FC<LanguageFilterProps> = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
}) => {

  const allLanguages = ['All', ...languages.filter((lang) => lang && lang !== 'All')];

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
      {allLanguages.map((lang) => {
        const isSelected = selectedLanguage === lang || (lang === 'All' && !selectedLanguage);

        return (
          <button
            key={lang}
            type="button"
            onClick={() => onSelectLanguage(lang === 'All' ? '' : lang)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
              isSelected
                ? 'bg-github-accent text-github-bg border-github-accent shadow-lg shadow-github-accent/20'
                : 'bg-github-surface text-github-muted border-github-border hover:border-github-accent/50 hover:text-github-text'
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};