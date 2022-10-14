import React from 'react';
import DeleteButton from "../UI/DeleteButton/DeleteButton";
import './PersonCard.css';

const PersonCard = ({person, eventHandlers, displayType}) => {
    const displayTypeModif = `_display-${displayType}`;
    const defaultText = 'Unknown';

    return (
        <div className={`person-card person-card${displayTypeModif}`}>
            <div className={`person-card__del-btn-wrapper person-card__del-btn-wrapper${displayTypeModif}`}>
                <DeleteButton {...eventHandlers} data-id={person.login.username} />
            </div>
            <div className={`person-card__name-wrapper person-card__name-wrapper${displayTypeModif}`}>
                <p className="person-card__name">{person.fullname}</p>
            </div>
            <div className="person-card__ava-wrapper">
                <img className={`person-card__ava person-card__ava${displayTypeModif}`}
                     src={person.picture?.large}
                     alt={person.fullname} />
            </div>
            <div className={`person-card__additional-info person-card__additional-info${displayTypeModif}`}>
                <a className="person-card__email"
                   href={`email:${person.email || ''}`}>
                    {person.email || defaultText}
                </a>
                <a className="person-card__phone"
                   href={`tel:${person.phone || ''}`}>
                    {person.phone || defaultText}
                </a>
                <p className="person-card__country">
                    {person.country || defaultText}
                </p>
            </div>
        </div>
    );
};

export default PersonCard;