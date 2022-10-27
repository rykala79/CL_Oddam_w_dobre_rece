import React from "react";
import Register from "../Register/Register"
import Navigation from "../Navigation";
import heroImage from "../../assets/HeroImage.png";
import Link from 'react-scroll'


export default function HomeHeader() {
  return (
    <header className="headerContainer" id="header">
      <div className="navContainer">
        <div className="headerNav">
          <Register/>
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

           <div className="buttonsContainer">
            
              <button className="btn">ODDAJ RZECZY</button>
              <button className="btn">ZORGANIZUJ ZBIORKE</button>
            
          </div> 

        </div>
      </div>
    </header>
  );
}