import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">AG Reese & Associates, P.C.</Link>
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
