import React from "react";
import AboutFoto from "../../assets/People.jpg";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";

export default function HomeAbout() {
  return (
    <section className="aboutUs" id="aboutUs">
      <div className="aboutUs-aboutText about-column">
        <h2 className="aboutText-title">O nas</h2>
        <img src={Decoration} alt="decoration" className="decoration" />
        <p className="aboutText-description">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={Signature} alt="signature" className="aboutText-signature" />
      </div>
      <div
        className="aboutUs-aboutImage about-column"
        style={{ backgroundImage: `url(${AboutFoto})` }}
      ></div>
    </section>
  );
}
