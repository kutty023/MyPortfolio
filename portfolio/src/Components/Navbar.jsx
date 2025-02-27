import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import '../Styles/Global.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar-container'>
      <nav className="navbar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
          ☰
        </div>
        
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end activeClassName="active">Home</NavLink> 
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
