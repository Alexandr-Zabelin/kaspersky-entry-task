import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input type="text"
                {...props}
                className="search-bar__input" />
        </div>
    );
};

export default SearchBar;