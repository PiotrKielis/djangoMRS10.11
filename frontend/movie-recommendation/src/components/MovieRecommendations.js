import React, { useState } from 'react';

function MovieRecommendations() {
    const [selectedMovie, setSelectedMovie] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleMovieSelect = (e) => {
        setSelectedMovie(e.target.value);
    };

    const getRecommendations = () => {
        if (!selectedMovie) return;

        const recommendedMovies = Array.from({ length: 5 }, (_, index) => ({
            title: `Recommended Movie ${index + 1} for "${selectedMovie}"`,
        }));

        setRecommendations(recommendedMovies);
    };

    return (
        <div className="movie-recommendations">
            <h2>Select a Movie or Director You Like</h2>
            <input
                type="text"
                value={selectedMovie}
                onChange={handleMovieSelect}
                placeholder="Type a movie or director"
            />
            <button onClick={getRecommendations}>Get Recommendations</button>

            {recommendations.length > 0 && (
                <div>
                    <h3>We Recommend:</h3>
                    <ul>
                        {recommendations.map((movie, index) => (
                            <li key={index}>{movie.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MovieRecommendations;
