import { useState, useEffect } from 'react';

const storage = 'gitexpo_search_history';
const max_item = 10;

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(storage);
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Failed to load search history from localStorage:', err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storage, JSON.stringify(history));
    } catch (err) {
      console.error('Failed to save search history to localStorage:', err);
    }
  }, [history]);


  const addSearch = (username: string) => {
    const trimmed = username.trim();
    if (!trimmed) return;

    setHistory((prev) => {
      const filtered = prev.filter(
        (item) => item.toLowerCase() !== trimmed.toLowerCase()
      );
      return [trimmed, ...filtered].slice(0, max_item);
    });
  };


  const removeSearch = (username: string) => {
    setHistory((prev) => prev.filter((item) => item !== username));
  };


  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history, addSearch, removeSearch, clearHistory,
  };
}