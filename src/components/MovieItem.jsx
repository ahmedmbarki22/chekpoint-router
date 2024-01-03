import React from "react";
import ReactStars from "react-stars";
import "./Style.css";

function MovieItem({ rating, title, posterUrl, description }) {
  return (
    <div className="movie-item">
      <div className="movie-item-cover">
        <img src={posterUrl} alt="" width={300} />
         </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <ReactStars
          count={10}
          size={35}
          half={false}
          edit={false}
          value={rating}
          color2={"#ffd700"}
        />
      </div>
    </div>
  );
}

export default MovieItem;
