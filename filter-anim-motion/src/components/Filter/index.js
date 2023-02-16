import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { getMoviesByGenre } from "../../helpers/filterMoviesByGenre";

const Filter = ({ movies, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    const filteredMovies = getMoviesByGenre(movies, activeGenre);
    setFiltered(filteredMovies);
  }, [activeGenre, movies]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

Filter.propTypes = {
  movies: PropTypes.array.isRequired,
  setFiltered: PropTypes.func.isRequired,
  activeGenre: PropTypes.number.isRequired,
  setActiveGenre: PropTypes.func.isRequired,
};

export default Filter;
