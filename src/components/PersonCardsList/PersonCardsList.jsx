import React, {useEffect, useState} from 'react';
import PersonCard from '../PersonCard/PersonCard';
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import './PersonCardsList.css'
import Select from "../UI/Select/Select";

const PersonCardsList = ({children, ...props}) => {
    const requestUrl = 'https://randomuser.me/api/?results=30&inc=gender,name,location,email,phone,picture,login';
    const sortOptions = [
        {name: 'Full name', value: 'fullname'},
        {name: 'Email', value: 'email'},
        {name: 'Phone', value: 'phone'},
        {name: 'Country', value: 'country'},
    ];
    const [persons, setPersons] = useState([]);
    const [sortType, setSortType] = useState(sortOptions[0]);

    useEffect(() => {
        fetch(requestUrl)
            .then(response => response.json())
            .then(json => setPersons([...json.results]));
    }, []);

    const handleDelete = (e) => {
      e.preventDefault();

      const targetId = e.target.dataset.id;

      setPersons(prevState =>
          prevState.filter(person =>
              person.login.username !== targetId
          )
      );
    };

    const handleChangeSortType = ({target}) => {
        sortPersons(target.value);
    }

    const sortPersons = (type) => {
        setPersons(prevState =>
            [...prevState].sort((a, b) =>
                a[type].localeCompare(b[type])
            )
        );

        console.log('Sorted');
    };

    const personCardsList = (
        <ul {...props} className="person-cards-list">
            {persons.map(person =>
                <li key={person.login.username}>
                    <PersonCard person={person}
                                eventHandlers={{
                                    onClick: handleDelete,
                                }} />
                </li>)}
        </ul>
    );

    return (
        <div className="person-cards-list-wrapper">
            <Select labelText="Sort by"
                    options={sortOptions}
                    changeHandler={handleChangeSortType} />
            {
                persons.length !== 0
                    ? personCardsList
                    : <LoadingSpinner />
            }
        </div>
    );
};

export default PersonCardsList;