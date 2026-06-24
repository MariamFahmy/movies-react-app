import React, { useEffect, useState } from 'react';
import Search from './components/Search.jsx';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_APY_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  // Never mutate state directly; use setter function instead
  const [searchTerm, setSearchTerm] = useState('');

  // Will only load at the start because it has an empty dependency array []
  // Only runs once the component loads
  useEffect(() => {}, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text=white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
