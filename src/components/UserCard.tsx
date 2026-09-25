import type { GitHubUser } from '../types/github';
import { FaMapMarkerAlt, FaBuilding, FaUsers, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa';

export function UserCard({ user }: { user: GitHubUser }) {
  return (
    <div className="bg-github-surface border-2 border-github-border rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8 w-full transition-all">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border-4 border-github-border shadow-md object-cover"
      />
      
      <div className="flex-1 space-y-4 text-center md:text-left w-full">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-github-text">
            {user.name || user.login}
          </h1>
        </div>

        {user.bio && (
          <p className="text-github-text text-sm font-medium leading-relaxed max-w-2xl">
            {user.bio}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-github-muted pt-2">
          {user.company && (
            <div className="flex items-center gap-1.5">
              <FaBuilding className="text-github-accent" />
              <span>{user.company}</span>
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-github-accent" />
              <span>{user.location}</span>
            </div>
          )}
          {user.created_at && (
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-github-accent" />
              <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', {month: 'short', year: 'numeric' })}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center md:justify-start gap-6 pt-4 border-t border-github-border">
          <div className="flex items-center gap-2 text-xs font-extrabold text-github-text">
            <FaUsers className="text-github-accent text-sm" />
            <span>{user.followers ?? 0} <span className="text-github-muted font-medium">Followers</span></span>
          </div>
          <div className="flex items-center gap-2 text-xs font-extrabold text-github-text">
            <FaCodeBranch className="text-github-accent text-sm" />
            <span>{user.public_repos ?? 0} <span className="text-github-muted font-medium">Repositories</span></span>
          </div>
          {user.following !== undefined && (
            <div className="flex items-center gap-2 text-xs font-extrabold text-github-text">
                <FaUsers className="text-github-accent text-sm" />
              <span>{user.following} <span className="text-github-muted font-medium">Following</span></span>
            </div>
          )}
        </div>

        {user.html_url && (
          <div className="pt-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block py-2 px-4 bg-github-accent hover:bg-github-accentHover text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}