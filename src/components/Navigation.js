import React from "react";
import {Link} from "react-scroll";

export default function Navigation() {
    return (
        <>
          
            <nav className="nav">
           <Link to="/">
                <button className="btn">Start</button>
            </Link>
           
           <Link to="/#fourSteps">
            <button className="btn">O co chodzi?</button>
            </Link>

           <Link to="/#aboutUs">
            <button className="btn">O Nas</button>
            </Link>

           <Link to="/#whoWeHelp">
            <button className="btn">Fundacja i organizacje</button>
            </Link>

           <Link to="/#contact">
            <button className="btn">Kontakt</button>
            </Link>

            </nav>
        </>
    )
}
