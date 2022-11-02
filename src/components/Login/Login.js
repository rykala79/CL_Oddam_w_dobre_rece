import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";

export default function Login() {
  return (
    <section className="login">
    <div className="login-Container">
      <div className="login-Register_nav">
        <LoginRegister />
        <Navigation />
      </div>
      </div>

      <form className="login-Register-form">
        <h2 className="form-title">Zaloguj się</h2>
        <img src={Decoration} alt="decoration" className="decoration" />

        <div className="form-Inputs">
          <div className="inputs-Email inputs">
            <label htmlFor="email" className="email-label">
              Email
            </label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="inputs-Password inputs">
            <label htmlFor="password" className="password-label">
              Hasło
            </label>
            <input type="password" id="password" name="password" />
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
      </form>
    </section>
  );
}
