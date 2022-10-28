
import LoginRegister from "../LoginRegister/LoginRegister";


export default function Login ()  {
    return (
        <section className="login">

<div className="loginRegister_nav">
            <LoginRegister />
            
        </div>

            <div className="loginContainer">
            <button className="btn" type="submit">Zaloguj sie</button>
            </div>
        </section>
    )

}

