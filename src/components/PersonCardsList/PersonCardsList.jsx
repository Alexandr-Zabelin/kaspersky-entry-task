import React, {useEffect, useState} from 'react';
import PersonCard from '../PersonCard/PersonCard';
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import './PersonCardsList.css'

const PersonCardsList = ({children, ...props}) => {
    const requestUrl = 'https://randomuser.me/api/?results=30&inc=gender,name,location,email,phone,picture,login';
    const [persons, setPersons] = useState([]);

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
            {
                persons.length !== 0
                    ? personCardsList
                    : <LoadingSpinner />
            }
        </div>
    );
};

export default PersonCardsList;