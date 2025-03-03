import proImg from '../assets/img2.png';
import '../Styles/About.css';
import '../Styles/Global.css'

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/FullstackDeveloper_Arthi_Resume.pdf';
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
              Results-oriented Full-Stack Developer with a strong foundation in cybersecurity principles (CCNA certified). Proven ability to build robust and user-friendly web applications using the MERN stack, coupled with a keen understanding of network security and ethical hacking practices. Adept at problem-solving and dedicated to delivering high-quality, efficient solutions. Proficient in Python and committed to continuous learning, with a focus on building innovative and impactful web solutions that bridge the gap between development and security.
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