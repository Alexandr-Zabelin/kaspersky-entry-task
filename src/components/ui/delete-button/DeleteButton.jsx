import React from "react";
import './DeleteButton.css';

const DeleteButton = ({children, ...props}) => {
    return (
        <button {...props} className="del-btn">
            &times;
        </button>
    );
};

export default DeleteButton;
