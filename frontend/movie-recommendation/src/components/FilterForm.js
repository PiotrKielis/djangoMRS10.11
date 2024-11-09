// FilterForm.js
import React, { useState } from 'react';
import './FilterForm.css';

function FilterForm({ onFilterChange }) {
    // Доступные жанры, которые могут быть выбраны
    const availableGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Fantasy', 'Animation'];

    // Состояния для хранения выбранных жанров, ключевых слов и режиссера
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [director, setDirector] = useState('');

    // Обработчик изменения жанра
    const handleGenreChange = (genre) => {
        if (selectedGenres.includes(genre)) {
            // Удаляем жанр, если он уже выбран
            setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
        } else {
            // Добавляем жанр, если он еще не выбран
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    // Обработчик клика по кнопке поиска
    const handleSearchClick = () => {
        if (typeof onFilterChange === 'function') {
            // Передача данных о фильтрах в родительский компонент
            onFilterChange({ genres: selectedGenres.join(','), keywords, director });
        } else {
            console.error('onFilterChange is not a function');
        }
    };

    return (
        <div className="filter-form">
            <div className="genres-container">
                <p>Select Genres:</p>
                <div className="genres-grid">
                    {availableGenres.map((genre, index) => (
                        <label key={genre} className="genre-label">
                            <input
                                type="checkbox"
                                value={genre}
                                checked={selectedGenres.includes(genre)}
                                onChange={() => handleGenreChange(genre)}
                            />
                            {genre}
                        </label>
                    ))}
                </div>
            </div>

            <input
                type="text"
                placeholder="Keywords (separated by space)"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
            <input
                type="text"
                placeholder="Director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default FilterForm;
