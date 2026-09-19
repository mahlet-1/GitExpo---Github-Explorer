import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SearchPage } from './pages/SearchPage';
import { UserProfile } from './pages/UserProfile'


const AppShell: React.FC = () => {
  return (
    <div className="min-h-screen bg-github-bg text-github-text flex flex-col font-sans select-none">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppShell/>
    </Router>
  );
};

export default App;