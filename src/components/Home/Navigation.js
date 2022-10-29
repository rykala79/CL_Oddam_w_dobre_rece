import React from "react";
import {Link} from "react-scroll";


export default function Navigation() {
    return (
        <nav className="Nav-Main">
            <Link to="#">
                <button className="btn btn-active">Start</button>
            </Link>
            <Link to="fourSteps" duration={500}>
                <button className="btn">O co chodzi?</button>
            </Link>
            <Link to="aboutUs" duration={500}>
                <button className="btn">O nas</button>
            </Link>
            <Link to="whoWeHelp" duration={500}>
                <button className="btn">Fundacja i organizacje</button>
            </Link>
            <Link to="contact" duration={500}>
                <button className="btn">Kontakt</button>
            </Link>
        </nav>
    )
}