import { useState } from 'react';

export default function Search({ onSearch, children }) {
    const [query, setQuery] = useState('');

    const handleKeyDown = (e) => {  //handle untuk tampilkan hasil search saat menekan tombol Enter
        if (e.key == "Enter") {
            onSearch(query)
        }
    }

    return (
        <div className="search-container">
            <input
                className="search" 
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
            {children}
        </div>
    );
    //
}
