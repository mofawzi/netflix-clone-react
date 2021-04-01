import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      const randomMovieIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomMovieIndex]);
      return request;
    }
    fetchData();
  }, []);

  // Truncate for the movie overview
  function truncate(str, len) {
    return str?.length > len ? str.substr(0, len - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // Get the random movie image through the API
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
    </header>
  );
};

export default Banner;
