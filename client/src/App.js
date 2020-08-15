import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Banner from './components/Banner';
import SearchResults from './pages/SearchResults';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Banner />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <SearchForm />
            <SearchResults />
          </Route>
          <Route exact path="/books/saved">
            <SavedBooks />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
