import React from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { moviesData } from "../Movies";
function MovieLink() {
  const { id } = useParams();
  const  prod = moviesData.find((elt) => elt.id == id);
  console.log(moviesData);
  return (
    <div className="movie-link">
      {" "}
      <h1>{prod.title}</h1> <p>{prod.description}</p>{" "}
      <div>
        {" "}
        <ReactPlayer url={prod.link} />{" "}
      </div>{" "}
      <div>
        {" "}
        <Link to={"/"}>
          {" "}
          <button>return home</button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
export default MovieLink;
