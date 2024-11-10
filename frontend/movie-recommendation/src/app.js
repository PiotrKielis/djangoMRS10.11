import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterForm from './components/FilterForm';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [showFilters, setShowFilters] = useState(true);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/movies/");
            const data = await response.json();
            console.log('Fetched movies data:', data);
            setMoviesData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movies:", error);
            setLoading(false);
        }
    };

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const handleFilterChange = (filters) => {
        const filtered = moviesData.filter(movie => {
            const matchesGenre = !filters.genres || movie.genre.toLowerCase().includes(filters.genres.toLowerCase());
            return matchesGenre;
        });

        setFilteredMovies(filtered);
        setCurrentPage(1);
    };

    const MOVIES_PER_PAGE = 6;
    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    const currentMovies = filteredMovies.length ? filteredMovies.slice(startIndex, startIndex + MOVIES_PER_PAGE) : moviesData.slice(startIndex, startIndex + MOVIES_PER_PAGE);
    const totalPages = Math.ceil((filteredMovies.length ? filteredMovies.length : moviesData.length) / MOVIES_PER_PAGE);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Header
                isDarkTheme={isDarkTheme}
                toggleTheme={toggleTheme}
            />
            <main className="content">
                <h1>Welcome to Movie Recommendation Service</h1>
                <p>Here you can explore movie recommendations and find your next favorite film!</p>

                <div className="filter-toggle-container">
                    <button className="nav-button filter-toggle-button" onClick={() => setShowFilters(!showFilters)}>
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>

                {showFilters && (
                    <div className="filter-form-container">
                        <FilterForm onFilterChange={handleFilterChange} />
                    </div>
                )}

                <h2 className="movies-header">Movies</h2>
                <div className="movies-container">
                    {currentMovies.map(movie => (
                        <div key={movie.title} className="movie">
                            <h2>{movie.title}</h2>
                            <p>Genre: {movie.genre}</p>
                            <p>Director: {movie.director}</p>
                            <p>Description: {movie.description}</p>
                        </div>
                    ))}
                </div>
                <div className="pagination-container">
                    <button className="nav-button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span> Page {currentPage} of {totalPages} </span>
                    <button className="nav-button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;