import React, { useState } from "react";

function Contact() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="contact">
  <h2 className="text-center mb-5">Kontakt</h2>
  <div className="container d-flex justify-content-center">
    <div className="row w-100 justify-content-center">
      <div className="col-md-6">
        <div className="contact-info text-center">
          <h4>Adresse</h4>
          <p>Steinweg 6<br />07646 Stadtroda</p>
          <h6>Verfügbar in der</h6>
          <p>Privatpraxis für Ganzheitliche Medizin Dr. med. Sabine Lodes<br />Zöllnitzer Str. 22<br />07751 Zöllnitz</p>

          <h4>Email</h4>
          <p>michaela.holubova@hotmail.de</p>

          <h4>Follow</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/annuluk_music/" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://annuluk.bandcamp.com/music/" className="social-icon"><i className="fab fa-bandcamp"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
      <footer>
  <div className="footer-content">
    <div className="footer-brand">
      MI°HO
      <div className="footer-icons">
        <img src="/assets/imgs/Heart1.png" alt="Icon 1" />
        <img src="/assets/imgs/Lungs1.png" alt="Icon 2" />
        <img src="/assets/imgs/Brain1.png" alt="Icon 3" />
      </div>
    </div>
    <div className="footer-text">
      Copyright © MI-HO 2024 | Made by <a className="footer-link" href="https://www.margaritaherazoportfolio.com/" target="_blank" rel="noopener noreferrer">Margarita Herazo</a>
      <br />
      <a href="/datenschutz" className="footer-link">Datenschutz und Impressum</a>
    </div>
  </div>
</footer>

    </section>
  );
}

export default Contact;
