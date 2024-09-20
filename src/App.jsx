import { useState, useEffect } from "react";
import "./App.css";
import { apiKey } from "./ApiKey";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
/* cSpell:disable */

function App() {
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);
  return (
    <>
      <div className="App">
        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie} />
      </div>
    </>
  );
}

export default App;
