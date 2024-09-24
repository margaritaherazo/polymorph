// src/components/Concept.js
import React from 'react';
import { Link } from 'react-router-dom';

function Concept() {
  return (
    <section id="concept" className="container">
      <h2 className="text-center">Our Concept</h2>
      <div className="row">
        <div className="col-md-6">
      <p>Learn more about our approach and the therapies we offer.
       we are working in trauma blbalabalabaal
      <Link to="/familyconst">Family Constellations</Link> and then blalabalaba
      <Link to="/fascialmanuvers">Fascial Manuvers</Link> and blabalbalaa
      <Link to="/tre">TRE</Link> and also in our vocal etc
        <Link to="/vocalbreath">Vocal Breath Therapy</Link> and lke this we heal
        </p>
        </div>
        <div className="col-md-6">
          <div className="img-container">
          <img src="/assets/imgs/tre.jpg" alt="TRE"className="img-fluid img-left" />
        </div> 
        <div className="img-container">
          <img src="/assets/imgs/fascial.jpg" alt="Fascial Manuvers" className="img-fluid img-right"  />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Concept;
