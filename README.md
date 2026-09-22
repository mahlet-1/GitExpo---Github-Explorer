# GitExpo- GitHub Explorer

A web application built by react and typescript that lets users seamlessly search GitHub profiles, see their repositories, filter by programming languages, sort by name, date updated, stars and forks, and rate limits that are fetched from Github API that counts in real-time.

---

## Key Features

- **Profile Search:** Search any valid GitHub username to view  their profile with detailed data like followers and repositories count.
- **Repository Search:** 
  - Search by repository name and description.
  - Dynamic language filtering generated automatically from fetched repositories.
  - Multi-criteria sorting with name, stars, forks and recently updated repositories
- **API Rate Limit Tracker:** Live indicator in the repository list tracking REST API requests to prevent unexpected 403 unexpected limits.
- **Error States:** State for handling non-existent users, empty repository states, and network failures with navigation back to search.

---

## 🛠️ Tech Stack

- **Framework:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** React Icons (`react-icons`)
- **API:** GitHub REST API

---
## Project Structure

```text
Github-Explorer/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── LanguageFilter.tsx
│   │   ├── NavBar.tsx
│   │   ├── RepoCard.tsx
│   │   ├── RepoList.tsx
│   │   ├── SearchBar.tsx
│   │   ├── SearchHistory.tsx
│   │   ├── SortSelect.tsx
│   │   └── UserCard.tsx
│   ├── hooks/
│   │   ├── useGitHubRepos.ts
│   │   ├── useGitHubUser.ts
│   │   └── useSearchHistory.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── RepoDetail.tsx
│   │   ├── SearchPage.tsx
│   │   └── UserProfile.tsx
│   ├── types/
│   │   └── github.ts
│   ├── App.css
│   └── App.tsx
├── node_modules/
├── .env
├── .gitignore
├── tailwind.config.js
└── package.json
```

## Getting Started Locally

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your computer.

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahlet-1/GitExpo---Github-Explorer
   cd Github-Explorer
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```


3. **Boot up the local development server:**
   ```bash
   npm run dev
   ```

4. **Build the app for final production deployment:**
   ```bash
   npm run build
   ```