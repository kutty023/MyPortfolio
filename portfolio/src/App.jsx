import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Resume from './Pages/Resume';
import './Styles/Global.css';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Skills />
    <Resume />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
