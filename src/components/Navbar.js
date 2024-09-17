import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="top-area">
    <div className="header-area">
      <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Logo</Link> 
          </div>
          <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
                <li><Link className="smooth-menu" to="/">Home</Link></li>
                <li><Link className="smooth-menu" to="/familyconst">Family Constellations</Link></li>
                <li><Link className="smooth-menu" to="/fascialmanuvers">Fascial Maneuvers</Link></li>
                <li><Link className="smooth-menu" to="/tre">TRE</Link></li>
                <li><Link className="smooth-menu" to="/vocalbreath">Vocal Breath</Link></li>
                <li><Link className="smooth-menu" to="#contact">Contact</Link></li> 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;