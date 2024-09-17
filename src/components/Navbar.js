import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/familyconst">Family Constellations</Link></li>
        <li><Link to="/fascialmanuvers">Fascial Manuvers</Link></li>
        <li><Link to="/tre">TRE (Tension, Stress & Trauma Release)</Link></li>
        <li><Link to="/vocalbreath">Vocal & Breath Therapy</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}

export default Navbar;
