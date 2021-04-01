import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";

// Default URL for images from TMDB API
const movieImageBaseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    // Fetch Data from API
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${movieImageBaseUrl}${movie.poster_path}`}
            alt={movie.name}
            className="row__poster"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;