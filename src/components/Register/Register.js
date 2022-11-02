import React, { useState } from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="register">
      <div className="loginRegister_nav">
        <LoginRegister />
        <Navigation />
      </div>
      

      <form className="login-Form" onSubmit={handleSubmit}>
        <h2 className="login-Form-title">Załóż konto</h2>
        <img className="decoration" src={Decoration} alt="decoration" />

        <div className="login-Form-Inputs">
          <div className="inputs-Email inputs">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputs-Password input">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="inputs-Password-Two inputs">
            <label htmlFor="password2">Powtórz hasło</label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>

        <Link to="/rejestracja">
          <button className="btn">Zaloz konto</button>
        </Link>
        <button className="btn" type="submit">
          Zaloguj sie
        </button>
      </form>
    </section>
  );
}
