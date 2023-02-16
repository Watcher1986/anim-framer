import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
import MovieCard from "./components/MovieCard";
import Filter from "./components/Filter";

import { fetchPopular } from "./api/functions/getMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const getMovies = useCallback(
    () => fetchPopular(setMovies, setFiltered),
    [setMovies, setFiltered]
  );

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Filter
        movies={movies}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="movies-container">
        <AnimatePresence>
          {filtered.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
