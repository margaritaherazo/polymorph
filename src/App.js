import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Familyconst from './pages/Familyconst';
import Fascialmanuvers from './pages/Fascialmanuvers';
import Tre from './pages/Tre';
import Vocalbreath from './pages/Vocalbreath';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/familyconst" element={<Familyconst />} />
          <Route path="/fascialmanuvers" element={<Fascialmanuvers />} />
          <Route path="/tre" element={<Tre />} />
          <Route path="/vocalbreath" element={<Vocalbreath />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
