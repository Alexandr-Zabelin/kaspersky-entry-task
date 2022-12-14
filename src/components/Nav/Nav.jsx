import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <h1 className="nav__heading title"><a className="title__link" href="https://www.kaspersky.com/">Kaspersky</a></h1>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link" to="/kaspersky-entry-task">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/kaspersky-entry-task/main">Main</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Nav;