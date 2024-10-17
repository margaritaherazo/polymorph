import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          MI°HO
          <div className="footer-icons">
            <img src="/assets/imgs/Heart2.png" alt="Icon 1" className="footer-img" />
            <img src="/assets/imgs/Lung2.png" alt="Icon 2" className="footer-img" />
            <img src="/assets/imgs/Brain2.png" alt="Icon 3" className="footer-img" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © MI-HO 2024 | Made by Margarita Herazo</p>
      </div>
    </footer>
  );
}

export default Footer;
