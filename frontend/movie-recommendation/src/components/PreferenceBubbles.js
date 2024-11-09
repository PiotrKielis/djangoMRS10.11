// PreferenceBubbles.js
import React, { useState } from 'react';
import './PreferenceBubbles.css';

function PreferenceBubbles({ onPreferencesSubmit }) {
    // Создаем 100 опций для выбора
    const options = [
        'Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance', 'Fantasy', 'Thriller', 'Animation',
        'Christopher Nolan', 'Quentin Tarantino', 'Martin Scorsese', 'Steven Spielberg', 'Ridley Scott',
        'Leonardo DiCaprio', 'Scarlett Johansson', 'Tom Hanks', 'Meryl Streep', 'Robert De Niro',
        'Inception', 'The Godfather', 'Pulp Fiction', 'The Dark Knight', 'Interstellar',
        // Добавляем еще больше опций для достижения 100 штук
        'Adventure', 'Crime', 'Mystery', 'Western', 'Musical', 'Biography', 'History', 'War', 'Documentary',
        'Hugh Jackman', 'Johnny Depp', 'Emma Stone', 'Jennifer Lawrence', 'Ryan Gosling', 'Anne Hathaway',
        'The Matrix', 'Gladiator', 'Shawshank Redemption', 'Fight Club', 'The Social Network',
        'Taxi Driver', 'The Grand Budapest Hotel', 'Gravity', 'Birdman', 'No Country for Old Men',
        'A Beautiful Mind', 'Schindler\'s List', '12 Angry Men', 'Mad Max: Fury Road', 'Gone Girl',
        'The Wolf of Wall Street', 'Django Unchained', 'Memento', 'Blade Runner', 'Alien',
        'Arrival', 'Ex Machina', 'Moonlight', 'Parasite', 'Jojo Rabbit', 'The Imitation Game',
        'Black Panther', 'The Avengers', 'The Shape of Water', 'The Irishman', 'The Pianist',
        'Forest Gump', 'Cast Away', 'The Truman Show', 'Léon: The Professional', 'The Prestige',
        'Oldboy', 'La La Land', 'Whiplash', 'Manchester by the Sea', 'Joker', 'Spotlight'
    ];

    // Состояния для доступных, отображаемых и выбранных опций
    const [availableOptions, setAvailableOptions] = useState(options);
    const [displayedOptions, setDisplayedOptions] = useState(options.slice(0, 15));
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Обработка выбора пузырька
    const handleBubbleClick = (option) => {
        if (selectedOptions.length < 10 && !selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);

            // Добавляем анимацию падения
            const index = displayedOptions.indexOf(option);
            const updatedOptions = [...displayedOptions];
            updatedOptions.splice(index, 1);
            setDisplayedOptions(updatedOptions);

            // После короткой задержки добавляем новый пузырек из оставшихся
            setTimeout(() => {
                const remainingOptions = availableOptions.filter(opt => ![...selectedOptions, ...updatedOptions].includes(opt));
                if (remainingOptions.length > 0) {
                    updatedOptions.push(remainingOptions[Math.floor(Math.random() * remainingOptions.length)]);
                    setDisplayedOptions(updatedOptions);
                }
            }, 500); // Задержка для анимации
        }
    };

    // Обработка завершения выбора предпочтений
    const handleSubmit = () => {
        if (selectedOptions.length > 0) {
            onPreferencesSubmit(selectedOptions);
        } else {
            alert('Please select at least one preference.');
        }
    };

    return (
        <div className="preference-bubbles">
            <h2>Select Your Preferences</h2>
            <p>Pick up to 10 genres, directors, actors, or movie titles that you like.</p>
            <div className="bubbles-container">
                {displayedOptions.map((option, index) => (
                    <div
                        key={index}
                        className={`bubble ${selectedOptions.includes(option) ? 'selected' : ''}`}
                        onClick={() => handleBubbleClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div className="selected-bubbles-container">
                {selectedOptions.map((option, index) => (
                    <div key={index} className="bubble selected">
                        {option}
                    </div>
                ))}
            </div>
            <button className="submit-button" onClick={handleSubmit} disabled={selectedOptions.length === 0}>
                Submit
            </button>
        </div>
    );
}

export default PreferenceBubbles;
