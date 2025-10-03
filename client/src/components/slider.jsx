// src/components/GenreArtistSlider.jsx
import React, { useState, useRef, useEffect } from "react";
import data from "../assets/data/deezerCache.json";
import "./slider.css";

const GenreArtistSlider = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [savedScroll, setSavedScroll] = useState(0); // guardar posición de scroll en géneros
  const sliderRef = useRef(null);

  const genres = data.genres;
  const artists = selectedGenre ? data.artists[selectedGenre] || [] : [];

  // cada vez que cambie selectedGenre, ajustar scroll
  useEffect(() => {
    if (sliderRef.current) {
      if (selectedGenre) {
        // al entrar a artistas → reset al inicio
        sliderRef.current.scrollLeft = 0;
      } else {
        // al volver a géneros → restaurar posición
        sliderRef.current.scrollLeft = savedScroll;
      }
    }
  }, [selectedGenre]);

  const handleGenreClick = (genreId) => {
    // guardar posición actual de géneros
    if (sliderRef.current) {
      setSavedScroll(sliderRef.current.scrollLeft);
    }
    setSelectedGenre(genreId);
  };

  const handleBackClick = () => {
    setSelectedGenre(null);
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-header">
        <h2>
          {selectedGenre
            ? `Artists in ${
                genres.find((g) => g.id === selectedGenre)?.name || "Genre"
              }`
            : "Genres"}
        </h2>

        {selectedGenre && (
          <button className="back-button" onClick={handleBackClick}>
            ⬅ Back
          </button>
        )}
      </div>

      <div className="slider-container" ref={sliderRef}>
        {selectedGenre
          ? artists.map((artist) => (
              <div key={artist.id} className="slider-item">
                <img src={artist.picture} alt={artist.name} />
                <p>{artist.name}</p>
              </div>
            ))
          : genres.map((genre) => (
              <button
                key={genre.id}
                className="slider-item"
                onClick={() => handleGenreClick(genre.id)}
              >
                <img src={genre.picture} alt={genre.name} />
                <p>{genre.name}</p>
              </button>
            ))}
      </div>
    </div>
  );
};

export default GenreArtistSlider;
