import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input type="text"
                {...props}/>
        </div>
    );
};

export default SearchBar;