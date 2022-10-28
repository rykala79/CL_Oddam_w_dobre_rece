import React from "react";
import LoginRegister from "../LoginRegister/LoginRegister"
import Navigation from "../Navigation";
import heroImage from "../../assets/Hero Image@2x.png";



export default function HomeHeader() {
  return (
    <header className="headerContainer" id="header">
      <div className="navContainer">
        <div className="headerNav">
          <LoginRegister/>
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