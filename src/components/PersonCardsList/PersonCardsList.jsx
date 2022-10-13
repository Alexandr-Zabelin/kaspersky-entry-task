import React, {useEffect, useState} from "react";
import PersonCard from "../PersonCard/PersonCard";

const PersonCardsList = () => {
    const requestUrl = 'https://randomuser.me/api/?results=3&inc=gender,name,location,email,phone,picture';
    const [persons, setPersons] = useState([]);

    useEffect(() => {
       fetch(requestUrl)
           .then(response => response.json())
           .then(json => setPersons(json.results));
    }, []);

    useEffect(() => {
       console.log(persons);
    }, [persons]);

    return (
        <ul className="person-cards-list">
            {persons.map(person =>
            <li key={person.phone}>
                <PersonCard person={person} />
            </li>)}
        </ul>
    );
};

export default PersonCardsList;