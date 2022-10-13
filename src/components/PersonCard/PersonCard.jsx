import React from 'react';
import DeleteButton from "../ui/delete-button/DeleteButton";
import './PersonCard.css';

const PersonCard = ({person}) => {
    const defaultPhotoSrc = '';
    const defaultText = 'Unknown';
    const {name} = person;
    const fullName = name.title && name.first && name.last
        ? `${name.title} ${name.first} ${name.last}`
        : defaultText;

    return (
        <div className="person-card">
            <div className="person-card__del-btn-wrapper">
                <DeleteButton />
            </div>
            <div className="person-card__name-wrapper">
                <p className="person-card__name">{fullName}</p>
            </div>
            <div className="person-card__ava-wrapper">
                <img className="person-card__ava"
                    src={person.picture?.large || defaultPhotoSrc}
                    alt={fullName} />
            </div>
            <div className="person-card__additional-info">
                <a className="person-card__email"
                    href={`email:${person.email || ''}`}>
                    {person.email || defaultText}
                </a>
                <a className="person-card__phone"
                   href={`tel:${person.phone || ''}`}>
                    {person.phone || defaultText}
                </a>
                <p className="person-card__country">
                    {person.location?.country || defaultText}
                </p>
            </div>
        </div>
    );
};

export default PersonCard;