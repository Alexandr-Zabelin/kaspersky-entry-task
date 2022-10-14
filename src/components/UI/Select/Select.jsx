import React from 'react';
import './Select.css';

const Select = ({labelText = '', options, ...props}) => {
    const selectId = Date.now();
    return (
        <div className="select-wrapper">
            <label className="select-label" htmlFor={selectId}>{labelText}</label>
            <select className="select"
                    id={selectId}
                    {...props}>
                {
                    options.map(option =>
                        <option value={option.value} key={option.value}>
                            {option.name}
                        </option>)
                }
            </select>
        </div>
    );
};

export default Select;