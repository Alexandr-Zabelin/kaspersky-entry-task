import React, {useLayoutEffect} from 'react';
import PersonCard from '../PersonCard/PersonCard';
import './PersonCardsList.css'

const PersonCardsList = ({personCards, children, eventHandlers, displayType, ...props}) => {
    const displayTypeModif = `_display-${displayType}`;
    const nonGroupJsx = (
        <ul {...props} className={`person-cards-list person-cards-list${displayTypeModif}`}>
            {
                personCards.map(person =>
                    <li key={person.login.username}>
                        <PersonCard person={person}
                                    eventHandlers={eventHandlers}
                                    displayType={displayType}
                                    {...props} />
                    </li>)
            }
        </ul>
    );

    let jsxToReturn;

    if (displayType === 'groups') {
        const groups = {};

        for (let person of personCards) {
            if (person.country in groups) {
                groups[person.country].push(person);
            } else {
                groups[person.country] = [person];
            }
        }

        jsxToReturn = (
            <div className="person-cards-list-flex-container">
                {
                    Object.keys(groups).map(country => {
                        return (
                            <div key={`${country}${Date.now()}`} className="group-wrapper">
                                <h3 className="group-heading">{country}</h3>
                                <ul className="group-list">
                                    {
                                        groups[country].map(person => {
                                            return (
                                                <li key={`${person.fullname}${Date.now()}`}>
                                                    <PersonCard
                                                        person={person}
                                                        eventHandlers={eventHandlers}
                                                        displayType={displayType}
                                                        {...props} />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        )
    } else {
        jsxToReturn = nonGroupJsx;
    }

    const emptyListText = <p className="empty-list-text">No items</p>

    return (
      <div className={`person-cards-list-wrapper person-cards-list-wrapper${displayTypeModif}`}>
          {
              personCards.length === 0 ? emptyListText : jsxToReturn
          }
      </div>
    );
};

export default PersonCardsList;