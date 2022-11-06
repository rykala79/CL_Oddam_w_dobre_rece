
import { Link } from "react-router-dom";

export default function LoginRegister() {
  return (
    <div className="login-register">
      <Link to="/logowanie">
        <button className="btn">Zaloguj</button>
      </Link>

      <Link to="/rejestracja">
        <button className="btn btn-a btn-yellow">Zaloz konto</button>
      </Link>
    </div>
  );
}
