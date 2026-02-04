import proImg from '../assets/img2.png';
import '../Styles/About.css';
import '../Styles/Global.css'

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Arthi.Resume.pdf';
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
              <p className="about-description" >
              Front-end-focused Full Stack Engineer with hands-on experience designing, developing, and deploying scalable web applications and internal tools using MERN stack. Proven ability to analyze business requirements, architect user-centric UI/UX solutions, and implement secure, high-performance systems. Experienced mentor with expertise in design systems, accessibility, code quality, system fundamentals, and cross-functional collaboration.
              </p>
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