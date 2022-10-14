import React, {useEffect, useState} from 'react';

const SearchBar = ({constSubject, setDynamicSubject, searchProp}) => {
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        console.log('SearchBar');
        if (searchQuery) {
            setDynamicSubject(constSubject.filter(elem =>
                    elem[searchProp]
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setDynamicSubject([...constSubject]);
        }
    }, [searchQuery]);

    return (
        <div>
            <input type="text"
                value={searchQuery}
                onChange={({target}) => setSearchQuery(target.value)}/>
        </div>
    );
};

export default SearchBar;