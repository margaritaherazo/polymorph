// src/components/Concept.js
import React from 'react';
import { Link } from 'react-router-dom';

function Concept() {
  return (
    <section id="concept">
      <h2>Our Concept</h2>
      <p>Learn more about our approach and the therapies we offer.</p>
      <ul>
        <li><Link to="/familyconst">Family Constellations</Link></li>
        <li><Link to="/fascialmanuvers">Fascial Manuvers</Link></li>
        <li><Link to="/tre">TRE</Link></li>
        <li><Link to="/vocalbreath">Vocal Breath Therapy</Link></li>
      </ul>
      {/* Add photos or other content here */}
    </section>
  );
}

export default Concept;
