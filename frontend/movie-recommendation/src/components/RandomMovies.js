// RandomMovies.js
import React from 'react';
import './RandomMovies.css';

function RandomMovies({ movies }) {
    return (
        <div className="movies-list">
            {movies.map((movie, index) => (
                <div className="movie-card" key={index}>
                    <div className="movie-poster">
                        {/* Здесь можно добавить <img src="URL_TO_IMAGE" /> если у вас есть URL изображения */}
                        <div className="poster-placeholder"></div>
                    </div>
                    <div className="movie-info">
                        <h3>{movie.name}</h3>
                        <p><strong>Genre:</strong> {movie.genre}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Description:</strong> {movie.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RandomMovies;
