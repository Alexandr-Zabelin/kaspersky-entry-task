import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <h1 className="nav__heading">Kaspersy JS Entry Task</h1>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link" to="/">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/main">Main</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Nav;