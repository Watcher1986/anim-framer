import { useEffect, useState } from "react";
import "./App.css";

import { api_key } from "./api/db-meta";

function App() {
  const [dataArr, setDataArr] = useState([]);
  const fetchPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const movies = await response.json();
    setDataArr(movies.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <h1>Hey there</h1>
    </div>
  );
}

export default App;
