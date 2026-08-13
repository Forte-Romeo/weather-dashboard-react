import { useState } from "react";

function SearchBar () {

    const [searchTerm, setSearchTerm] = useState("");

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSearch() {
        console.log("Searching for:", searchTerm);
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search for cities"
                value={searchTerm}
                onChange={handleInputChange}
            />

            <button onClick={handleSearch}>
                🔍
            </button>
        </div>
    );
}

export default SearchBar;