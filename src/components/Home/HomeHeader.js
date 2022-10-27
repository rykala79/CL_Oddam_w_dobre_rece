import React from "react";
import Navigation from "../Navigation";
import heroImage from "../../assets/HeroImage.jpg";
import Link from 'react-scroll'


export default function HomeHeader() {
  return (
    <header className="headerContainer" id="header">
      <div className="navContainer">
        <div className="headerNav">
          <Navigation />
        </div>
      </div>
      <div
        className="heroContainer"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="heroText">
          <h2 className="welcome-text">
            Zacznij pomagac!
            <br />
            Oddaj niechciane rzeczy w zaufane rece
          </h2>

          {/* <div className="buttonsContainer">
                    <Link to="/logowanie">
                        <button className="btn">Oddaj rzeczy</button>
                    </Link>

                    <Link to="/logowanie">
                        <button className="btn">Zorganizuj Zbiorke</button>
                    </Link>

                </div> */}
        </div>
      </div>
    </header>
  );
}