import { Link } from 'react-router-dom';
import Logo from '../assets/AG_Reese_Logo.png';
import '../App.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">
          <div className='nav-brand-left'>
            <img src={Logo} alt='A.G. Reese & Associates, P.C. Logo' className='navigation-logo'/>
          </div>
          <div className='nav-brand-right'>
            A.G. Reese & Associates, P.C.
            <h5 className='slogan'>Integrity at its best</h5>
          </div>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;