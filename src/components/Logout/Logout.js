import LoginRegister from "../LoginRegister/LoginRegister";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";


export default function logout() {
return (
   <section className="logout">
        <div className="login-Register-Nav">

            <Navigation/>
            <LoginRegister/>
        </div>

        <form className="login-Register-Form">
            <h2>Wylogowanie nastapilo pomyslnie</h2>
            <img src= {Decoration}  alt="decoration" className="decoration" />
        <div className="logout-Button">
            <Link to="/"><button className="btn btn-a">Strona glowna</button></Link>
        </div>

        </form>

   </section>
   ) 
}