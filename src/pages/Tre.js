
import React from 'react';

function Tre() {
  return (
    <section className="tre-section">
      <div className="container">
        <h1 className="text-center">TRE®</h1>
        <div className="row align-items-start">
          <div className="col-md-4 text-center">
          <video width="100%" controls className="tre-video">
                <source src="/assets/videos/trevideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="tre-image-wrapper">
          <a href="https://www.tre-deutschland.de/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/imgs/trelogo.jpg" alt="trelink" className="img-fluid" />
          </a>
        </div>
          </div>
          <div className="col-md-8">
      <p>TRE® (Tension & Trauma Releasing Exercises) ist eine Serie von einfachen Übungen, die darauf abzielt, Muskelverspannungen zu lösen und das Nervensystem zu beruhigen. Diese Methode wurde von Dr. David Berceli entwickelt und basiert auf der Annahme, dass traumatische Erlebnisse und chronischer Stress zu physischen Verspannungen führen, die im Körper gespeichert werden.      </p>

  <h3>Wirkung von TRE® bei Trauma</h3>

  <h4>1. Muskelentspannung und Tremor</h4>
  <p>Die TRE®-Übungen induzieren unwillkürliche Muskelzittern oder -vibrationen, die als natürliches Entspannungsreaktion des Körpers betrachtet werden. Dieses Zittern hilft, tiefsitzende muskuläre Spannungen zu lösen, die oft in Verbindung mit traumatischen Erlebnissen stehen.</p>

  <h4>2. Reduktion der Amygdala-Aktivität</h4>
  <p>Durch die Entspannung der Muskulatur und das Zittern kann TRE® helfen, die Überaktivität der Amygdala zu reduzieren. Dies kann zu einer Abnahme der intensiven Angstreaktionen führen, die häufig mit Trauma verbunden sind.</p>

  <h4>3. Stärkung des Hippocampus</h4>
  <p>TRE® kann das parasympathische Nervensystem aktivieren, was zu einer Senkung der Stresshormonspiegel führt. Dies unterstützt den Hippocampus in seiner Funktion und kann die Integration und Verarbeitung traumatischer Erinnerungen fördern.</p>

  <h4>4. Beruhigung des Nervensystems</h4>
  <p>TRE® hilft, das autonome Nervensystem zu regulieren, indem es das Gleichgewicht zwischen dem sympathischen (Kampf- oder Fluchtreaktion) und dem parasympathischen Nervensystem (Ruhe- und Verdauungsreaktion) wiederherstellt. Dies führt zu einer insgesamt beruhigenden Wirkung auf den Körper und Geist, was besonders bei Personen mit posttraumatischen Belastungsstörungen (PTBS) hilfreich sein kann.</p>

  <h3>Praktische Anwendung</h3>
  <p>TRE® kann sowohl allein als auch unter Anleitung eines ausgebildeten TRE®-Providers durchgeführt werden. In der Gruppe wie einzeln. Es wird empfohlen, mit einem Provider zu beginnen, insbesondere wenn jemand eine traumatische Vorgeschichte hat, um sicherzustellen, dass die Übungen korrekt ausgeführt werden und eine sichere Umgebung gewährleistet ist.</p>

  <p>Zusammenfassend kann TRE® eine wirksame Methode sein, um die physischen und emotionalen Folgen von Trauma zu lindern. Es wirkt durch die Entspannung der Muskulatur, die Beruhigung des Nervensystems und die Unterstützung der natürlichen Heilungsprozesse des Körpers.</p>
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
      Copyright © MI-HO 2024 | Made by <a href="https://www.margaritaherazoportfolio.com/" target="_blank" rel="noopener noreferrer">Margarita Herazo</a>
      <br />
      <a href="/datenschutz" className="footer-link">Datenschutz und Impressum</a>
    </div>
  </div>
</footer>

    </section>
  );
}

export default Tre;
