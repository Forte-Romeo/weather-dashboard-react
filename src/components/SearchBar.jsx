function SearchBar () {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search for cities"
            />

            <button>
                🔍
            </button>
        </div>
    );
}

export default SearchBar;