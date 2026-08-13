import { useState } from "react";

function SearchBar ({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSearch() {
        const trimmedSearch = searchTerm.trim();

        if (trimmedSearch === "") {
            return;
        }

        onSearch(trimmedSearch);
        setSearchTerm("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search for cities"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleSearch}>
                🔍
            </button>
        </div>
    );
}

export default SearchBar;