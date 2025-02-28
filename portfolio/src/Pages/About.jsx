import proImg from '../assets/img2.png';
import '../Styles/About.css';
import '../Styles/Global.css'

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
      <section id='about'>
        <h1 className="heading">
          <u>
            <span className="highlight-text">About Me</span>
          </u>
        </h1>
        <div id="about-sec">
            <div className="profile-image2">
                <img src={proImg} alt="Profile Image" />
            </div>
            <div className="about-content">
              <p className="about-description" >Web development professional with a strong track record in mentoring, project leadership, Cybersecurity and technical expertise. Skilled in full-stack development, various programming languages, and security practices. Committed to continuous learning and contributing to advanced projects in both fields.</p>
              <p className="language-skills"><strong>Languages : &nbsp; </strong>English, Kannada, Tamil, Hindi, Telugu </p>
              <button id='download-btn' onClick={handleDownload}>Download CV</button>
            </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.