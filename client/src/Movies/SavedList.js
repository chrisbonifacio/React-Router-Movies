import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <NavLink
        activeClassName="activeLink"
        to={`/movies/${movie.id}`}
        key={index}
        className="saved-movie"
      >
        {movie.title}
      </NavLink>
    ))}
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }} className="home-button">
        <Link to="/">Home</Link>
      </div>
      <div
        style={{ backgroundColor: "pink" }}
        onClick={e => {
          props.clearSavedList();
        }}
        className="home-button"
      >
        Clear
      </div>
    </div>
  </div>
);

export default SavedList;
