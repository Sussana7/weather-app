function SearchSection() {
    return (
        <main>
            <div className="search-wrapper">
                <div className="search-container">
                    <img src="/assets/images/icon-search.svg" alt="search" />
                    <input type="text" placeholder="Search for a place..." />
                </div>
                <button className="search-btn">Search</button>
            </div>        
        </main>
    );
}

export default SearchSection;