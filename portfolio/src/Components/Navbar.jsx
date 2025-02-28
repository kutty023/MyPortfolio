import { useState, useEffect } from 'react';
import '../Styles/Navbar.css';
import '../Styles/Global.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() =>{
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) =>{
        entries.forEach((entry) =>{
          if(entry.isIntersecting){
            setActiveSection(entry.target.id)
          }
        })
      },
      {rootMargin: "40px 0px -40% 0px", threshold: 0.3}
    )
    sections.forEach((section) => observer.observe(section));
    return() => sections.forEach((section) => observer.unobserve(section));
  }, [])

  const handleSetActive = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className='navbar-container'>
      <nav className="navbar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu for mobile view">
          ☰
        </div>
        
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#" className={activeSection === "home" ? "active" : ""} onClick={() => handleSetActive("home")}>Home</a> 
          </li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => handleSetActive("about")}>About</a>
          </li>
          <li>
            <a href="#services" className={activeSection === "services" ? "active" : ""} onClick={() => handleSetActive("services")}>Services</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => handleSetActive("skills")}>Skills</a>
          </li>
          <li>
            <a href="#resume" className={activeSection === "resume" ? "active" : ""} onClick={() => handleSetActive("resume")}>Resume</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => handleSetActive("projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => handleSetActive("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
