import React, {useEffect, useState} from "react";
import PersonCardsList from "./PersonCardsList/PersonCardsList";
import './App.css';
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";
import SortSelect from "./SortSelect/SortSelect";
import SearchBar from "../SearchBar/SearchBar";

function App() {
    console.log('app');
    const requestUrl = 'https://randomuser.me/api/?results=5&inc=gender,name,location,email,phone,picture,login';
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
    const [searchedPersons, setSearchedPersons] = useState([]);
    useEffect(() => {
        setSearchedPersons(persons);
    }, [persons]);

    const deletePostHandler = ({target}) => {
        const targetId = target.dataset.id;

        setPersons(prevState => prevState.filter(person =>
            person.login.username !== targetId));
    };

    const sortOptions = [
        {name: 'Full name', value: 'fullname'},
        {name: 'Email', value: 'email'},
        {name: 'Phone', value: 'phone'},
        {name: 'Country', value: 'country'},
    ];

    const fulfilledComponent = (
        <div className="App">
            <SearchBar
                constSubject={persons}
                setDynamicSubject={setSearchedPersons}
                searchProp="fullname"/>
            <SortSelect
                options={sortOptions}
                labelText="Sort by"
                sortSubject={persons}
                setSortSubject={setPersons}/>
            <PersonCardsList personCards={searchedPersons} eventHandlers={{
                onClick: deletePostHandler,
            }} />
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
