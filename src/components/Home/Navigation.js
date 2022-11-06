import React, {useState} from "react";
import {Link} from "react-scroll";
import {HashLink} from "react-router-hash-link";
export default function Navigation() {
    return (
        <nav className="nav-main">
            <HashLink to="/">
                <button className="btn btn-a">Start</button>
            </HashLink>
            <HashLink to="/#fourSteps" duration={500}>
                <button className="btn">O co chodzi?</button>
            </HashLink>
            <HashLink to="/#aboutUs" duration={500} >
                <button className="btn">O nas</button>
            </HashLink>
            <HashLink to="/#whoWeHelp" duration={500} >
                <button className="btn">Fundacja i organizacje</button>
            </HashLink>
            <HashLink to="/#contact" duration={500} >
                <button className="btn">Kontakt</button>
            </HashLink>
        </nav>
    )
}