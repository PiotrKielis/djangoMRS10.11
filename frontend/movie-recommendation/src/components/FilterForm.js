import React, { useState } from 'react';

function FilterForm({ onFilterChange }) {
    const [filters, setFilters] = useState({
        genres: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange(filters);
    };

    return (
        <form className="filter-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="genres">Select Genres:</label>
                <input
                    type="text"
                    id="genres"
                    name="genres"
                    value={filters.genres}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="nav-button">Search</button>
        </form>
    );
}

export default FilterForm;