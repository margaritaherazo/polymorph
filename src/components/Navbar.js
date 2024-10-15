import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              MI°HO
              <div className="navbar-images d-flex ml-2">
                <img src="/assets/imgs/Heart2.png" alt="Icon 1" className="navbar-img" />
                <img src="/assets/imgs/Lung2.png" alt="Icon 2" className="navbar-img" />
                <img src="/assets/imgs/Brain2.png" alt="Icon 3" className="navbar-img" />
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to="/vocalbreath">Atem & Stimmcoaching</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/fascialmanuvers">Faszialle Manöver</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/tre">TRE® </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/familyconst">Gestalttherapeutische Aufstellungsarbeit</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Kontakt</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
