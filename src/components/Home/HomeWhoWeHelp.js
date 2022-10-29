import { Link } from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";

export default function HomeWhoWeHelp() {
  return (
    <section className="whoWeHelp" id="whoWeHelp">
      <h2 className="whoWeHelp-title">Komu pomagamy?</h2>
      <img src={Decoration} alt="decoration" className="decoration" />
      <nav className="whoWeHelp-nav">
        <Link to="/" className="whoWeHelp-link">
          <button className="whoWeHelp-button btn btn-a">Fundacjom</button>
        </Link>
        <Link to="/organizacje" className="whoWeHelp-link">
          <button className="whoWeHelp-button btn">
            Organizacjom
            <br />
            pozarządowym
          </button>
        </Link>
        <Link to="/zbiorki" className="whoWeHelp-link">
          <button className="whoWeHelp-button btn">
            Lokalnym
            <br />
            zbiórkom
          </button>
        </Link>
      </nav>
      <p className="whoWeHelp-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
    </section>
  )
}
