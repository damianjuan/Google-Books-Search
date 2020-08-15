import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />

      <SearchForm />
    </div>
  );
}

export default App;
