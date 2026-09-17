import type { GitHubUser } from '../types/github';

export function UserCard({ user }: { user: GitHubUser }) {
  return (
    <div className="bg-github-bg border border-github-border rounded-xl shadow-lg p-6 max-w-sm w-full transition-all hover:border-github-muted hover:scale-105">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={`${user.name || user.login}'s avatar`}
          className="w-16 h-16 rounded-full object-cover border-2 border-github-accent shadow-[0_0_15px_rgba(35,134,54,0.6)]"
        />
        <div>
          <h3 className="text-xl font-black text-github-accent">
            {user.name || user.login}
          </h3>
          <p className="text-sm text-github-muted">@{user.login}</p>
        </div>
      </div>

      {user.bio && (
        <p className="mt-4 text-sm text-github-text leading-relaxed line-clamp-3">
          {user.bio}
        </p>
      )}

      <div className="mt-6 flex justify-around border-t border-github-border pt-4 text-center">
        <div>
          <span className="block text-xl font-bold text-white">
            {user.public_repos ?? 0}
          </span>
          <span className="text-xs text-github-muted tracking-wider">REPOS</span>
        </div>
        <div>
          <span className="block text-xl font-bold text-white">
            {user.followers ?? 0}
          </span>
          <span className="text-xs text-github-muted tracking-wider">FOLLOWERS</span>
        </div>
        {user.following !== undefined && (
          <div>
            <span className="block text-xl font-bold text-white">
              {user.following}
            </span>
            <span className="text-xs text-github-muted tracking-wider">FOLLOWING</span>
          </div>
        )}
      </div>

      <a
        href={user.html_url}
        className="mt-6 block w-full py-2.5 px-4 bg-github-accent hover:bg-github-accentHover text-white text-center text-sm font-semibold rounded-lg transition-colors shadow-sm"
      >
        View Profile
      </a>
    </div>
  );
}