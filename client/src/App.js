import React, { useState } from "react";
import { Route } from "react-router-dom";

import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const clearSavedList = () => {
    setSavedList([]);
  };

  return (
    <div>
      <SavedList list={savedList} clearSavedList={clearSavedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        exact
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </div>
  );
};

export default App;
