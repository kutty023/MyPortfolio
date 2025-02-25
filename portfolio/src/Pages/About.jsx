import '../Styles/About.css';
import proImg from '../assets/img2.png';

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Arthi_CV.pdf';
    link.download = 'Arthi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
    <div className='container'>
      <section className='about'>
        <h1 id="abt-heading">
          <u>
            <span className="highlight-text">About Me</span>
          </u>
        </h1>
        <div id="about-sec">
            <div className="second-profile-image">
                <img src={proImg} alt="Profile Image" />
            </div>
            <div className="about-content">
              <h3 className="name">I'm  ARTHI</h3>
              <h3 className="role">Full-Stack Developer with Design Skills</h3>
              <p className="about-description" >Web development professional with a strong track record in mentoring, project leadership, Cybersecurity and technical expertise. Skilled in full-stack development, various programming languages, and security practices. Committed to continuous learning and contributing to advanced projects in both fields.</p>
              <p className="language-skills"><strong>Languages:</strong>English, Kannada, Tamil, Hindi, Telugu </p>
              <button id='download-btn' onClick={handleDownload}>Download CV</button>
            </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;


{/* style={{color: '#F4B675'}}
  <h3 style={{color: '#ffffff'}}>I'm  ARTHI</h3> 
<h3 style={{color: '#C3986B'}}>Full-Stack Developer with Design Skills</h3>
<p style={{color: '#868686', paddingBottom: '20px' }}>Web development professional with a strong track record in mentoring, project leadership, Cybersecurity and technical expertise. Skilled in full-stack development, various programming languages, and security practices. Committed to continuous learning and contributing to advanced projects in both fields.</p>
<p style={{color: '#868686'}} */}