import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Foundations from "./WhoWeHelp/Foundations";
import Organizations from "./WhoWeHelp/Organizations";
import Locals from "./WhoWeHelp/Locals";
import Decoration from "../../assets/Decoration.svg";

const organizationsTypes = ["Fundacje", "Organizacje ", "Zbiorki"];

export default function HomeWhoWeHelp() {
  const [toggleActive, setToggleActive] = useState("fundacje");

  const handleChangeActive = (e) => {
    console.log(e.target.id);
    setToggleActive(e.target.id);
  };

  return (
    <section className="whoWeHelp" id="whoWeHelp">
      <h2 className="whoWeHelp-title">Komu pomagamy?</h2>
      <img src={Decoration} alt="decoration" className="decoration" />
      <nav className="whoWeHelp-nav">
        <Link to="/" className="whoWeHelp-link">
          <button
            id="fundacje"
            className={`whoWeHelp-button btn ${
              toggleActive === "fundacje" ? "btn-a" : ""
            }`}
            onClick={handleChangeActive}
          >
            Fundacje
          </button>
        </Link>
        <Link to="/organizacje" className="whoWeHelp-link">
          <button
            id="zbiorki"
            className={`whoWeHelp-button btn ${
              toggleActive === "zbiorki" ? "btn-a" : ""
            }`}
            onClick={handleChangeActive}
          >
            Organizacjom
            <br />
            pozarządowym
          </button>
        </Link>
        <Link to="/zbiorki" className="whoWeHelp-link">
          <button className="whoWeHelp-button btn">
            Lokalnym
            <br />
            zbiórkom
          </button>
        </Link>
      </nav>
      <p className="whoWeHelp-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>

      <Routes>
        <Route path="/" element={<Foundations />} />
        <Route path="/organizacje" element={<Organizations />} />
        <Route path="/zbiorki" element={<Locals />} />
      </Routes>
    </section>
  );
}
