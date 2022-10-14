import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import './PersonCardsList.css'

function spreadPersonsInGroups(personsArr, selector) {
    const groups = {};

    for (let person of personsArr) {
        if (person[selector] in groups) {
            groups[person[selector]].push(person);
        } else {
            groups[person[selector]] = [person];
        }
    }

    return groups;
}

function getFulfilledGroupContainer(groups, personCardProps) {
    return (
        <div className="person-cards-list-flex-container">
            {
                Object.keys(groups).map(selector => {
                    return getFulfilledGroup(groups, selector, personCardProps);
                })
            }
        </div>
    );
}

function getFulfilledGroup(groups, selector, personCardProps) {
    return (
        <div key={`${selector}${Date.now()}`} className="group-wrapper">
            <h3 className="group-heading">{selector}</h3>
            {
                getFulfilledList(groups, selector, personCardProps)
            }
        </div>
    );
}

function getFulfilledList(groups, selector, {eventHandlers, displayType, ...personCardProps}) {
    return (
        <ul className="group-list">
            {
                groups[selector].map(person => {
                    return (
                        <li key={`${person.fullname}${Date.now()}`}>
                            <PersonCard
                                person={person}
                                eventHandlers={eventHandlers}
                                displayType={displayType}
                                {...personCardProps} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

const PersonCardsList = ({personCards, children, eventHandlers, displayType, ...props}) => {
    let jsxToReturn;
    const displayTypeModif = `_display-${displayType}`;
    const emptyListText = <p className="empty-list-text">No items</p>
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

    if (displayType === 'groups') {
        const groups = spreadPersonsInGroups(personCards, 'country');

        jsxToReturn = getFulfilledGroupContainer(groups, {
            ...props,
            eventHandlers: eventHandlers,
            displayType: displayType,
        });
    } else {
        jsxToReturn = nonGroupJsx;
    }

    return (
      <div className={`person-cards-list-wrapper person-cards-list-wrapper${displayTypeModif}`}>
          {
              personCards.length === 0 ? emptyListText : jsxToReturn
          }
      </div>
    );
};

export default PersonCardsList;