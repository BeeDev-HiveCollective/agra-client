import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './views/404';
import ScrollToTop from './components/ReusableComponents/ScrollToTopComponent/ScrollToTop';
import Navigation from './components/ReusableComponents/NavigationComponent/Navigation';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Resources from './views/Resources';
import Contact from './views/Contact';
import Footer from './components/ReusableComponents/FooterComponent/Footer';
import Privacy from './views/Privacy';
import Terms from './views/Terms'
import Unsubscribe from './views/Unsubscribe'

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app_wrapper">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
