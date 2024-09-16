import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Familyconst from './pages/Familyconst';
import Fascialmanuvers from './pages/Fascialmanuvers';
import Tre from './pages/Tre';
import Vocalbreath from './pages/Vocalbreath';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
