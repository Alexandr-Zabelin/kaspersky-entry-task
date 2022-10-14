import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import './PersonCardsList.css'

const PersonCardsList = ({personCards, children, eventHandlers, ...props}) => {
    const fulfilledList = (
        <ul {...props} className="person-cards-list">
            {
                personCards.map(person =>
                    <li key={person.login.username}>
                        <PersonCard person={person}
                                    eventHandlers={eventHandlers} />
                    </li>)
            }
        </ul>
    );

    const emptyListText = <p className="empty-list-text">No items</p>

    return (
      <div className="person-cards-list-wrapper">
          {
              personCards.length === 0 ? emptyListText : fulfilledList
          }
      </div>
    );
};

export default PersonCardsList;