import '../Styles/About.css';
import proImg from '../assets/img2.png';

const About = () => {
  return (
    <>
    <div className='container'>
      <section className='about'>
        <h1 id="abt-heading"><u><span style={{color: '#F4B675'}}>About Me</span></u></h1>
        <div id="About-sec">
            <div className="my-second-image">
                <img src={proImg} alt="prof-img" />
            </div>
            <div className="about-content">
              <h3 style={{color: '#ffffff'}}>I'm  ARTHI</h3> 
              <h3 style={{color: '#C3986B'}}>Full-Stack Developer with Design Skills</h3>
              <p style={{color: '#868686', paddingBottom: '20px' }}>Web development professional with a strong track record in mentoring, project leadership, Cybersecurity and technical expertise. Skilled in full-stack development, various programming languages, and security practices. Committed to continuous learning and contributing to advanced projects in both fields.</p>
              <p style={{color: '#868686'}}>Language   :      English, Kannada, Tamil, Hindi, Telugu </p>
              <button id='download-btn'> Donwload CV</button>
            </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
