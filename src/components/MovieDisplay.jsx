import React from "react";

export default function MovieDisplay({movie}) {
  const loaded = () => {
    return (
      <>
        <div>MovieDisplay</div>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No movie to display</h1>
  }

  return movie ? loaded() : loading();
}