import "./App.css";
import { useState } from "react";
import MoviesListe from "./components/MoviesListe";
import NavBar from "./components/NavBar";
import { moviesData } from "./Movies";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRating={setRating} />
      <MoviesListe
        setMovies={setMovies}
        movies={movies}
        search={search}
        rating={rating}
      />
    </div>
  );
}

export default App;
