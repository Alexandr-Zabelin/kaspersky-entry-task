import React from 'react';
import './DisplayType.css';

const DisplayType = ({currentValue, ...props}) => {
    const tableButton = (
        <button className="display-type__button display-type__button_table" value="table" type="button" key="table" {...props}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );

    const listButton = (
        <button className="display-type__button display-type__button_list" value="list" type="button" key="list" {...props}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );

    const groupsButton = (
        <button className="display-type__button display-type__button_groups" value="groups" type="button" key="groups" {...props}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );

    const buttons = [tableButton, listButton, groupsButton];

    return (
        <div className="display-type">
            {buttons}
        </div>
    );
};

export default DisplayType;