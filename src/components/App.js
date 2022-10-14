import React, {useEffect, useMemo, useState} from "react";
import PersonCardsList from "./PersonCardsList/PersonCardsList";
import './App.css';
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";
import Select from "./UI/Select/Select";
import SearchBar from "./UI/SearchBar/SearchBar";
import DisplayType from "./DisplayType/DisplayType";

function App() {
    const requestUrl = 'https://randomuser.me/api/?results=3&inc=gender,name,location,email,phone,picture,login';
    const [isResponseGotten, setIsResponseGotten] = useState(false);
    const [isResponseSuccess, setIsResponseSuccess] = useState(false);

    useEffect(() => {
        fetch(requestUrl)
            .then(response => response.json())
            .then(json => {
                const results = json.results;

                results.forEach((person) => {
                   person.fullname = `${person.name.first} ${person.name.last} `;
                   person.country = person.location.country;
                });

                setIsResponseGotten(true);
                setIsResponseSuccess(true);
                setPersons([...results]);
            })
            .catch(error => {
                setIsResponseGotten(true);
                setIsResponseSuccess(false);
            });
    }, []);

    const [persons, setPersons] = useState([]);

    const [displayType, setDisplayType] = useState('table');

    const sortOptions = [
        {name: 'Full name', value: 'fullname'},
        {name: 'Email', value: 'email'},
        {name: 'Phone', value: 'phone'},
        {name: 'Country', value: 'country'},
    ];
    const [sortType, setSortType] = useState(sortOptions[0].value);
    const sortedPersons = useMemo(() => {
        return [...persons].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    }, [persons, sortType]);

    const [searchQuery, setSearchQuery] = useState('');
    const sortedAndSearchedPersons = useMemo(() => {
        if (searchQuery) {
            return sortedPersons.filter(person =>
                person.fullname
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            );
        } else {
            return sortedPersons;
        }
    }, [sortedPersons, searchQuery]);

    const changeDisplayType = ({target}) => {
        const newValue = target.closest('button').value;

        setDisplayType(newValue);
    }
    const changeSearchQuery = ({target}) => {
        setSearchQuery(target.value);
    };
    const changeSortType = ({target}) => {
        setSortType(target.value)
    };
    const deletePostHandler = ({target}) => {
        const targetId = target.dataset.id;

        setPersons(prevState => prevState.filter(person =>
            person.login.username !== targetId));
    };

    const fulfilledComponent = (
        <div className="App">
            <DisplayType
                onClick={changeDisplayType}
                currentValue={displayType}/>
            <SearchBar
                placeholder="Type to search"
                value={searchQuery}
                onChange={changeSearchQuery} />
            <Select
                options={sortOptions}
                labelText="Sort by"
                onChange={changeSortType} />
            <PersonCardsList
                personCards={sortedAndSearchedPersons}
                eventHandlers={{
                    onClick: deletePostHandler,
                }}
                displayType={displayType}/>
        </div>
    );
    const errorComponent = <p>Error</p>;

    if (isResponseGotten) {
        if (isResponseSuccess) {
            return fulfilledComponent
        } else {
            return errorComponent
        }
    } else {
        return <LoadingSpinner />;
    }
}

export default App;
