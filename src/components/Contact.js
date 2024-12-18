
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2 className="text-center mb-5">Kontakt</h2>
      <div className="container">
        <div className="row">
          {/* Left Column - Contact Form */}
          <div className="col-md-6">
            {submitted ? (
              <p>Thank you for your message! We will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Send</button>
              </form>
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
              <p>miho.home@outlook.com</p>

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
