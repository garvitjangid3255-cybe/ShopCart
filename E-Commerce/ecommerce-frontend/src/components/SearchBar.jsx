import React from 'react'

function SearchBar({ search, setSearch }) {
    return (
        <div>
            <input type="text"
                placeholder='Search Products...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-6 w-full rounded-lg border p-3"
            />
        </div>
    )
}

export default SearchBar
