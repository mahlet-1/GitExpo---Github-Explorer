import { useGitHubUser } from '../hooks/useGitHubUser';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { RepoList } from '../components/RepoList';
import { UserCard } from '../components/UserCard'; 

export const UserProfile: React.FC = () => {
  const { user, loading: userLoading, error: userError } = useGitHubUser();
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
        <h2 className="text-2xl font-black text-github-text mb-2">User Not Found</h2>
        <p className="text-github-muted text-sm">{userError || "The requested GitHub user doesn't exist."}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 select-none">
      
      <div className="flex justify-center">
        <UserCard user={user} />
      </div>

      <div className="space-y-4 pt-4 border-t border-github-border">
        <h2 className="text-xl font-black text-github-text">Repositories</h2>
        <RepoList repos={repos} loading={reposLoading} error={reposError} />
      </div>

    </div>
  );
};

export default UserProfile;