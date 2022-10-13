import React from "react";
import './DeleteButton.css';

const DeleteButton = ({children, ...props}) => {
    // &times; - cross sign (like X)
    return (
        <button {...props} className="del-btn">
            &times;
        </button>
    );
};

export default DeleteButton;
