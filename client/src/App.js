import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Banner from './components/Banner';
import ResultsCard from './components/ResultsCard';
import SavedCard from './components/SavedCard'
import SearchResults from './pages/SearchResults';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <SearchForm />
      <SearchResults />
      <SavedBooks />
    </div>
  );
}

export default App;
