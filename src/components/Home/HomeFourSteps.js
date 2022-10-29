import {Link} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";
import TshirtIcon from "../../assets/Icon-1.svg";
import BagIcon from "../../assets/Icon-2.svg";
import LoupeIcon from "../../assets/Icon-3.svg";
import CourierIcon from "../../assets/Icon-4.svg";

export default function HomeFourSteps() {
  return (
    <section className="fourSteps" id="fourSteps">
      <h2 className="fourSteps-title">Wystarczą 4 proste kroki</h2>
      <img src={Decoration} alt="decoration" className="decoration" />
      <div className="fourSteps-Steps">
        <div className="fourSteps-step">
          <img src={TshirtIcon} alt="tshirt icon" className="step-icon" />

          <div className="step-text">
            <h4 className="step-title">Wybierz rzeczy</h4>
            <p className="step-description">ubrania, zabawki, sprzęt i inne</p>
          </div>

        </div>

        <div className="fourSteps-step">
          <img src={BagIcon} alt="bag" className="step-icon" />
          <div className="step-text">
            <h4 className="step-title">Spakuj je</h4>
            <p className="step-description">skorzystaj z worków na śmieci</p>
          </div>
        </div>

        <div className="fourSteps-step">
          <img src={LoupeIcon} alt="loupe" className="step-icon" />
          <div className="step-text">
            <h4 className="step-title">Zdecyduj komu chcesz po móc</h4>
            <p className="step-description">wybierz zaufane miejsce</p>
          </div>
        </div>

        <div className="fourSteps-step">
          <img src={CourierIcon} alt="arrows" className="step-icon"/>
          <div className="step-text">
            <h4 className="step-title">Zamów kuriera</h4>
            <p className="step-description">
              kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>

      </div>

      <Link to="/logowanie">
        <button className="btn btn-a btn-b"> ODDAJ <br /> RZECZY </button>
      </Link>
    </section>
  );
}
