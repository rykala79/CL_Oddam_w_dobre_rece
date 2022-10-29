import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <div className="loginRegister_nav">
        <LoginRegister />
        <Navigation />
      </div>

      <Link to="/rejestracja">
        <button className="btn">Zaloz konto</button>
      </Link>
      <button className="btn" type="submit">
        Zaloguj sie
      </button>
    </section>
  );
}
