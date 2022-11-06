import React, { useState, useEffect } from "react";
import Decoration from "../../assets/Decoration.svg";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import background from "../../assets/Background-Contact-Form.jpg";
import sendForm from "./help";
export default function HomeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [validation, setValidation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendOrNot = [];
    console.log(sendOrNot);

    if (name.includes(" ") || name.length === 0) {
      sendOrNot.push("invalidName");
    }

    if (
      email.length === 0 ||
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null
    ) {
      sendOrNot.push("invalidEmail");
    }

    if (message.length < 120) {
      sendOrNot.push("invalidMessage");
    }

    if (sendOrNot.length === 0) {
      const data = {
        name: name,
        email: email,
        message: message,
      };
      setValidation([]);
      sendForm(data, setSuccess, [setName, setEmail, setMessage]);
    } else {
      setValidation([...sendOrNot]);
      setSuccess(false);
    }
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{
        backgroundImage: ` linear-gradient(#FFFFFFC9, #FFFFFFC9), url(${background})`,
      }}
    >
      <form action="" className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Skontaktuj się z nami</h2>
        <img src={Decoration} alt="decoration" className="decoration" />

        {success ? (
          <p className="form-successMessage" id="form-successMessage">
            Wiadomość została wysłana!
            <br />
            Wkrótce się skontaktujemy
          </p>
        ) : (
          <></>
        )}

        <div className="form-personalData">
          <div className="personalData-name personalData">
            <label htmlFor="name">Wpisz swoje imię</label>

            <input
              type="text"
              name="name"
              id="name"
              className={`${
                validation.includes("invalidName") ? "invalid" : "valid"
              }`}
              placeholder="Krzysztof"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {validation.includes("invalidName") ? (
              <p className="error-message">Podane imę jest nieprawidłowe!</p>
            ) : (
              <></>
            )}
          </div>

          <div className="personalData-email personalData">
            <label htmlFor="email">Wpisz swój email</label>
            <input
              type="text"
              name="email"
              id="email"
              className={`${
                validation.includes("invalidEmail") ? "invalid" : "valid"
              }`}
              placeholder="abc@xyz.pl"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {validation.includes("invalidEmail") ? (
              <p className="error-message">Podane email jest nieprawidłowy!</p>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="form-message">
          <label htmlFor="message">Wpisz swoją wiadomość</label>
          <textarea
            name="message"
            id="message"
            className={`${
              validation.includes("invalidMessage") ? "invalid" : "valid"
            }`}
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          ></textarea>
          {validation.includes("invalidMessage") ? (
            <p className="error-message">
              Wiadomość musi mieć conajmniej 120 znaków!
            </p>
          ) : (
            <></>
          )}
        </div>

        <button type="submit" className="btn btn-a form-button">
          Wyślij
        </button>
      </form>
      <footer className="contact-footer">
        <div className="footer-copyrightContainer">
          <p className="footer-copyright">Copyright by Coders Lab</p>
        </div>
        <div className="footer-socialMedia">
          <img src={facebook} alt="facebook" className="socialMedia__icon" />
          <img src={instagram} alt="instagram" className="socialMedia__icon" />
        </div>
      </footer>
    </section>
  );
}
