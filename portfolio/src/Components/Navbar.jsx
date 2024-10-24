import { NavLink } from 'react-router-dom'; // Change Link to NavLink
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
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
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
