import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        {/* Add your logo here */}
        <Link to="/">Logo</Link>
      </div>
      <ul>
        {/* Home Link */}
        <li><Link to="/">Home</Link></li>

        {/* About Section Link */}
        <li><Link to="/about">About</Link></li>

        {/* Therapy Links */}
        <li><Link to="/familyconst">Family Constellations</Link></li>
        <li><Link to="/fascialmanuvers">Fascial Manuvers</Link></li>
        <li><Link to="/tre">TRE (Tension, Stress & Trauma Release)</Link></li>
        <li><Link to="/vocalbreath">Vocal & Breath Therapy</Link></li>

   {/* Contact Link */}
   <li><Link to="/contact">Contact</Link></li>

      </ul>

      {/* Social Media Icons */}
      <div className="social-icons">
        {/* Add social media icons with links */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}

export default Navbar;
