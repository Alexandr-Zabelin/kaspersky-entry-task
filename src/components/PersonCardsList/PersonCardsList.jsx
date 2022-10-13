import React, {useDebugValue, useEffect, useState} from 'react';
import PersonCard from '../PersonCard/PersonCard';
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";
import './PersonCardsList.css'

const PersonCardsList = ({children, ...props}) => {
    const requestUrl = 'https://randomuser.me/api/?results=30&inc=gender,name,location,email,phone,picture,login';
    const [persons, setPersons] = useState([]);

    useEffect(() => {
       setTimeout(() => fetch(requestUrl)
           .then(response => response.json())
           .then(json => setPersons([...json.results])), 5000);
    }, []);

    useEffect(() => {
       console.log(persons);
    }, [persons]);

    const handleDelete = (e) => {
      e.preventDefault();

      const targetId = e.target.dataset.id;

      setPersons(prevState =>
          prevState.filter(person =>
              person.login.username !== targetId
          )
      );
    };

    return (
        <div className="person-cards-list-wrapper">
            {
                persons.length !== 0
                    ?
                    <ul {...props} className="person-cards-list">
                        {persons.map(person =>
                            <li key={person.login.username}>
                                <PersonCard person={person}
                                            eventHandlers={{
                                                onClick: handleDelete,
                                            }} />
                            </li>)}
                    </ul>
                    :
                    <LoadingSpinner />
            }
        </div>
    );
};

export default PersonCardsList;