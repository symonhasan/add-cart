import React from "react";
import './Navigation.css';
import {Link} from 'react-router-dom';

// function that return dynamic list
const Navlink = (arr) => {
    return arr.map((link, index) => {
        return <li key={index} className="nav-link"><Link to={link.route}>{link.title}</Link></li>;
    });
};

// Navigation Link Componenet
const Navlinks = (props) => {
    return <div className="navlinks">{Navlink( props.links )}</div>;
};

// Top Navigation
const Navigation = (props) => {
    return (
        <div className="nav-bar">
            {/* <h3 className="site-title">{props.title}</h3> */}
            <Navlinks links={props.links} />
        </div>
    );
};

export default Navigation;
