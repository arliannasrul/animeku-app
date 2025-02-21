import { useState } from 'react';

export default function Search({ onSearch, children }) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery); // Update query di state lokal
        onSearch(searchQuery); // Kirim query ke fungsi pencarian di App.jsx
    };

    return (
        <div className="search-container">
            <input
                className="search"
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={handleChange}
            />
            {children}
        </div>
    );
}
