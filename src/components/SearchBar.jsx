import { useState } from "react";

function SearchBar ({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedSearch = searchTerm.trim();

        if (!trimmedSearch) {
            return;
        }

        onSearch(trimmedSearch);
        setSearchTerm("");
    }

    return (
        <form 
            className="search-container" 
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="Search for cities"
                value={searchTerm}
                onChange={handleInputChange}
            />

            <button type="submit">
                🔍
            </button>
        </form>
    );
}

export default SearchBar;