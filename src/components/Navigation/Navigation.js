import React from "react";
import './Navigation.css';

// function that return dynamic list
const Navlink = (arr) => {
    return arr.map((link, index) => {
        return <li key={index} className="nav-link">{link.title}</li>;
    });
};

// Navigation Link Componenet
const Navlinks = (props) => {
    return <ul className="navlinks">{Navlink( props.links )}</ul>;
};

// Top Navigation
const Navigation = (props) => {
    return (
        <div className="nav-bar">
            <h3 className="site-title">{props.title}</h3>
            <Navlinks links={props.links} />
        </div>
    );
};

export default Navigation;
