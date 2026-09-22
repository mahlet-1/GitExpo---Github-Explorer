import { useGitHubUser } from '../hooks/useGitHubUser';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useParams, useNavigate } from 'react-router-dom';
import { RepoList } from '../components/RepoList';
import { UserCard } from '../components/UserCard'; 
import { FaArrowLeft } from 'react-icons/fa';

export const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { user, loading: userLoading, error: userError, rateLimit } = useGitHubUser();
  const { repo: repos, loading: reposLoading, error: reposError } = useGitHubRepos();

  if (userLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-github-accent font-extrabold animate-pulse text-base">Loading profile...</div>
      </div>
    );
  }

  if (userError || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-black text-github-text mb-2"> {userError} </h2>
        <p className="text-github-muted text-md">Couldn't find the user you are searching for. Please check the username and try again.
        </p>
         <button
          onClick={() => navigate('/search')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-github-accent/50 border border-github-border rounded-xl text-sm font-bold text-github-text hover:border-github-accent transition-all mt-7"
        >
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 select-none">

      <div>
        <button
          onClick={() => navigate('/search')}
          className="inline-flex items-center gap-2 text-sm font-bold text-github-muted hover:text-github-accent transition-colors"
        >
          <FaArrowLeft className="text-github-accent" />
          <span>Back to Search</span>
        </button>
      </div>
      
      <div className="flex justify-center">
        <UserCard user={user} />
      </div>

      <div className="space-y-4 pt-4 border-t border-github-border">
        <h2 className="text-xl font-black text-github-text">Repositories</h2>
        <RepoList repos={repos} loading={reposLoading} error={reposError} username={username || ''} rateLimit={rateLimit} />
      </div>

    </div>
  );
};

export default UserProfile;