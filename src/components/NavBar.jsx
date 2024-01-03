import React from "react";
import "./Style.css";
import ReactStars from "react-stars";
function NavBar({ setSearch, setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="nav-container">
      <h1>cimaroom</h1>
      <div className="stars-box">
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={35}
          color2={"#ffd700"}
        />
      </div>
      <div className="search-box">
        <input
          type="search"
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default NavBar;
