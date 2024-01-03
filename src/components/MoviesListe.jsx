import React, { useState } from "react";
import "./Style.css";
import MovieItem from "./MovieItem";
import { FormGroup, FormField, Form, Input, Button } from "semantic-ui-react";

function MoviesListe({ movies, search, rating, setMovies }) {
  const [newMovie, setNewMovie] = useState({});
  return (
    <div className="movies-list">
      <Form>
        <FormGroup widths="equal">
          <FormField
            id="form-input-control-first-name"
            control={Input}
            placeholder="Titel"
            onChange={(e) => {
              setNewMovie({ ...newMovie, title: e.target.value });
            }}
          />
          <FormField
            id="form-input-control-last-name"
            control={Input}
            placeholder="Poster url"
            onChange={(e) => {
              setNewMovie({ ...newMovie, posterUrl: e.target.value });
            }}
          />
          <FormField
            id="form-input-control-last-name"
            control={Input}
            type="number"
            min={1}
            max={10}
            placeholder="rating"
            onChange={(e) => {
              setNewMovie({ ...newMovie, rating: e.target.value });
            }}
          />
          <FormField
            id="form-input-control-last-name"
            control={Input}
            placeholder="Description"
          />
        </FormGroup>
        <Button
          onClick={() => {
            setMovies([...movies, newMovie]);
          }}
        >
          Add
        </Button>
      </Form>
      <h1>Movies</h1>
      <div className="movies-container">
        {movies

          .filter((elt) =>
            elt.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((movie) => (rating ? movie.rating === rating : movie))
          .toReversed()
          .map((movie) => (
            <MovieItem {...movie} />
          ))}
      </div>
    </div>
  );
}

export default MoviesListe;
