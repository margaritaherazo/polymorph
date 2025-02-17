import React, { useState } from "react";

function Contact() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="contact">
      <h2 className="text-center mb-5">Kontakt & Nächste Workshops</h2>
      <div className="container">
        <div className="row">
          {/* Left Column - workshop */}
          <div className="col-md-6">
            <h4 className="text-center">Körpergedächtnis Workshop</h4>
            <p className="text-center">
            <strong>Samstags jeweils von</strong> <br /> 10-17 Uhr
            </p>
            <p className="text-center">
              22.02.2025<br /> 08. | 29. 03<br /> 12. | 26. 04<br />17. | 31. 05<br /> 14. | 28. 06<br /> 12. | 26. 07  <br /> 
              16. | 30. 08 <br />   13. | 27. 09 <br />  11. | 25. 10
            </p>
            <p className="text-center">
            <strong>Ort:</strong> YOGABEWEGT, Ludwig-Weimar.Gasse 1 <br />  07743 Jena    </p>

               {/* Button to toggle more info */}
            <div className="text-center">
              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Weniger anzeigen" : "Mehr Infos"}
              </button>
            </div>

            {/* Additional information */}
            {showMore && (
              <div className="text-center mt-3">
                <p>
      Vielleicht spürst du sie schon länger – diese innere Spannung, die dich begleitet.
      Sie zeigt sich im Körper, im Atem, in den Gedanken. Du weißt, dass etwas anders werden muss, aber wie?
    </p>
    <p>
      Ich lade dich ein, mit mir einen Weg zu gehen, der die neuesten Erkenntnisse zum autonomen Nervensystem
      und dem faszialen Netzwerk berücksichtigt. Einen Weg, der auf einem ehrlichen Kontakt mit dir selbst
      und deinem Körper basiert.
    </p>
    <p>
      Du wirst der ureigenen Intelligenz deines Körpers begegnen und deine Verbindung zum morphischen Feld wahrnehmen.
    </p>
    <p>
      Mit Atem- und Stimmarbeit, faszialen Techniken, der TRE®-Methode und Gestaltaufstellungen schaffen wir gemeinsam
      einen Raum, in dem du:
    </p>
    <ul className="list-unstyled">
      <li>🔹 deinem Körper erlaubst, loszulassen – physisch wie emotional,</li>
      <li>🔹 deinen Atem als Anker nutzen kannst,</li>
      <li>🔹 den Körper als deinen größten Verbündeten würdigst und</li>
      <li>🔹 Vertrauen in deine eigene Kraft entwickelst.</li>
    </ul>
    <p>
      <strong>Warum das funktioniert?</strong><br />
      Dein Körper ist ein lebendiges, vernetztes System. Wenn du ihm den Raum gibst, sich selbst zu regulieren,
      kann sich vieles von allein in Balance bringen. Es braucht keinen Druck, nur ein wenig Mut, hinzuspüren
      und dir Zeit zu nehmen.
    </p>
    <p>
      Ich verspreche dir keine Heilung und keine schnellen Wunder.<br />
      Ich bringe dich mit Techniken in Kontakt, die dir fortan zur Verfügung stehen werden,
      die du jederzeit auch allein durchführen kannst. Selbstverantwortlich angewendet,
      können sie einen großen Beitrag auf deinem Heilungsweg leisten.
    </p>
    <p>
      Ich eröffne einen Raum, in dem du erforschen kannst, was dir nicht mehr dient, was dich stärkt
      und was dir wirklich gut tut.
    </p>
    <p>
      <strong>Der erste Schritt?</strong><br />
      Den gehst du – und ich begleite dich ein Stück auf deinem Weg.
    </p>
    <p><strong>Dieser Workshop wird intensiv.</strong></p>
    <p>Alle Methoden sind als „Hands-off“ oder „Hands-on“ möglich.</p>
    <p><strong>Maximale Teilnehmerzahl:</strong> 11 Personen</p>
    <p><strong>Kosten:</strong> 145€ pro Person, pro Workshop</p>

                <p>
                <strong> Anmeldung unter:</strong> <a className="email-link" href="mailto:michaela.holubova@hotmail.de">michaela.holubova@hotmail.de</a>
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Extra Contact Info */}
          <div className="col-md-6">
            <div className="contact-info">
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
