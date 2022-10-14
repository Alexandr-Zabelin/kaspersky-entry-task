import React from 'react';
import './DisplayType.css';

const DisplayType = (props) => {
    return (
        <div className="display-type">
            <button className="display-type__button display-type__button_table" value="table" type="button" {...props}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className="display-type__button display-type__button_list" value="list" type="button" {...props}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className="display-type__button display-type__button_groups" value="groups" type="button" {...props}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
};

export default DisplayType;