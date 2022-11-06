import React, { UseState } from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import { HashLink } from "react-router-hash-link";

export default function logout() {
  return (
    <section className="login">
      <div className="login-container">
        <div className="login-register-nav">
          <Navigation />
          <LoginRegister />
        </div>
      </div>
      <form className="login-register-form">
        <h2 className="form-title">Wylogowanie nastąpiło pomyślnie</h2>
        <img src={Decoration} alt="decoration" className="decoration" />
        <div className="logout-Button">
          <HashLink to="/">
            <button className="btn btn-a">Strona glówna</button>
          </HashLink>
        </div>
      </form>
    </section>
  );
}
