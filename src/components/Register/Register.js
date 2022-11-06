import React, { useState } from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [validation, setValidation] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
;

  const sendOrNot = [];

  if (email.length === 0 || email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
      sendOrNot.push("invalidEmail")
  }

  if (password.length < 6) {
      sendOrNot.push("invalidPassword")
  }

  if (password2.length < 6 || password2 === password) {
      sendOrNot.push("invalidPassword2")
  }

  setValidation([...sendOrNot])
}

  return (
    <section className="login">
      <div className="login-register-nav">
        <LoginRegister />
        <Navigation />
      </div>
      

      <form className="login-register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Załóż konto</h2>
        <img className="decoration" src={Decoration} alt="decoration" />

        <div className="form-inputs">
          <div className="inputs-email inputs">
            <label  htmlFor="email" className="email-label">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className={`${validation.includes('invalidEmail') ? 'invalid' : 'valid'}`} onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <p className={`${validation.includes('invalidEmail') ? 'visible' : ''} error-message`}>Podany email jest nieprawidłowy!</p>
            
          </div>

          <div className="inputs-password inputs">
            <label htmlFor="password" className="password-label">Hasło</label>
            <input type="password" id="password" name="password" className={`${validation.includes('invalidPassword') ? 'invalid' : 'valid'}`} onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <p className={`${validation.includes('invalidPassword') ? 'visible' : ''} error-message`}>Podane hasło jest za krótkie!</p>
          </div>

          <div className="inputs-password-two inputs">
            <label htmlFor="passwordTwo">Powtórz hasło</label>
            <input type="password" id="passwordRepeat" name="passwordRepeat" className={`${validation.includes('invalidPassword2') ? 'invalid' : 'valid'}`}onChange={(e) => setPassword2(e.target.value)} value={password2}/>
                            <p className={`${validation.includes('invalidPassword2') ? 'visible' : ''} error-message`}>Hasła nie są takie same!</p>
          </div>
        </div>
<div className="form-buttons">
        <Link to="/rejestracja">
          <button className="btn">Zaloz konto</button>
        </Link>
        <button className="btn btn-a" type="submit">
          Zaloguj sie
        </button>
        </div>

      </form>
    </section>
  )
}
