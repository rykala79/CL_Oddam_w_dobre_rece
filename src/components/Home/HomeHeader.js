import React from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "./Navigation";
import Decoration from "../../assets/Decoration.svg";
import heroImage from "../../assets/HeroImage.png";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <header className="header-Container">
      <div className="header-Container-NavBox">
        <LoginRegister />
        <Navigation />
      </div>

      <div
        className="hero-Container"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-Text">
          <h2 className="welcome-Text">
            Zacznij pomagac!
            <br />
            Oddaj niechciane rzeczy w zaufane rece
          </h2>
          <img className="decoration" src={Decoration} alt="decoration" />

          <Link to="/logowanie">
            <button className="btn btn-a btn-b">
              ODDAJ <br /> RZECZY
            </button>
          </Link>

          <Link to="/logowanie">
            <button className="btn btn-a btn-b">
              ZORGANIZUJ <br /> ZBIORKE
            </button>
          </Link>
          
        </div>
      </div>
    </header>
  );
}
