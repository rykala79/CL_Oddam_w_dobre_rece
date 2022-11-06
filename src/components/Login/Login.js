import { useState } from "react";
import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";

export default function Login() {

  const [loader, setLoader] = useState("loading");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendOrNot = [];

    if (
      email.length === 0 ||
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null
    ) {
      sendOrNot.push("invalidEmail");
    }

    if (password.length < 6) {
      sendOrNot.push("invalidPassword");
    }

    setValidation([...sendOrNot]);
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-register-nav">
          <LoginRegister />
          <Navigation />
        </div>
      </div>

      <form className="login-register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Zaloguj się</h2>
        <img src={Decoration} alt="decoration" className="decoration" onLoad={() => setLoader('loaded')} /> 
        {loader === 'loaded' ?
        <>
          <div className="form-inputs">
            <div className="inputs-Email inputs">
              <label htmlFor="email" className="email-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={`${
                  validation.includes("invalidEmail") ? "invalid" : "valid"
                }`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p
                className={`${
                  validation.includes("invalidEmail") ? "visible" : ""
                } error-message`}
              >
                Podany email jest nieprawidłowy!
              </p>
            </div>

            <div className="inputs-password inputs">
              <label htmlFor="password" className="password-label">
                Hasło
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`${
                  validation.includes("invalidPassword") ? "invalid" : "valid"
                }`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <p
                className={`${
                  validation.includes("invalidPassword") ? "visible" : ""
                } error-message`}
              >
                Podane hasło jest za krótkie!
              </p>
            </div>
          </div>

          <div className="form-buttons">
            <Link to="/rejestracja">
              <button className="btn" type="button">
                Załóż konto
              </button>
            </Link>
            <button className="btn btn-a" type="submit">
              Zaloguj się
            </button>
          </div>
        </>: <></>}
      </form>
    </section>
  )
}
