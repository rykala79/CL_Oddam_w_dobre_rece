import Decoration from '../../assets/Decoration.svg';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';
import background from '../../assets/Background-Contact-Form.jpg';

export default function HomeContact() {

    return (
        <section className="contact" id="contact"  style={{backgroundImage: ` linear-gradient(#FFFFFFC9, #FFFFFFC9), url(${background})`}} >
            <form action="" className="contact-form">
                <h2 className="form-title">Skontaktuj się z nami</h2>
                <img src={Decoration}  alt="decoration" className="decoration" />
                 
                 
                <div className="form-personalData">
                
                    <div className="personalData-name personalData">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        
                        <input type="text" name="name" id="name" placeholder="Krzysztof"/>
                    </div>

                    <div className="personalData-email personalData">
                        <label htmlFor="email">Wpisz swój email</label>
                        <input type="text" name="email" id="name" placeholder="email@cl.pl"/>
                    </div>
                </div>

                <div className="form-message">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea name="message" id="message" rows="4"
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                </div>
                
                <button type="submit" className="btn btn-active form__button">Wyślij</button>
            </form>
            <footer className="contact-footer">
                <div className="footer-copyrightContainer">
                    <p className="footer-copyright">Copyright by Coders Lab</p>
                </div>
                <div className="footer-socialMedia">
                    <img src={facebook} alt="facebook" className="socialMedia__icon"/>
                    <img src={instagram} alt="instagram" className="socialMedia__icon"/>
                </div>
            </footer>
        </section>
    )
}