import "./App.css";
import { useState } from "react";
import MoviesListe from "./components/MoviesListe";
import NavBar from "./components/NavBar";
import { moviesData } from "./Movies";
import { Routes, Route } from "react-router-dom";
import MovieLink from "./components/MovieLink";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRating={setRating} />
      <Routes>
        <Route
          path="/"
          element={
            <MoviesListe
              setMovies={setMovies}
              movies={movies}
              search={search}
              rating={rating}
            />
          }
        />

        <Route path="/movies/:id" element={<MovieLink movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
