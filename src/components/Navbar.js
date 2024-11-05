import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = () => setIsOpen(false); 

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              MI°HO
              <div className="navbar-images d-flex ml-2">
                <img src="/assets/imgs/Heart1.png" alt="Icon 1" className="navbar-img" />
                <img src="/assets/imgs/Lungs1.png" alt="Icon 2" className="navbar-img" />
                <img src="/assets/imgs/Brain1.png" alt="Icon 3" className="navbar-img" />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/atem-stimm" onClick={handleNavLinkClick}>
                    Atem & Stimmcoaching
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fascialmanuvers" onClick={handleNavLinkClick}>
                    Fasziale Manöver
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tre" onClick={handleNavLinkClick}>
                    TRE®
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aufstellungsarbeit" onClick={handleNavLinkClick}>
                    Gestalttherapeutische Aufstellungsarbeit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kontak" onClick={handleNavLinkClick}>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
