import {Link} from "react-router-dom";


 export default function Register() {
    return (
      <div className="login">

            <Link to="/logowanie">
            <button className="btn">Zaloguj</button>
            </Link>

            <Link to="/rejestracja">
            <button className="btn">Zaloz konto</button>
            </Link>

      </div>
    );

}

