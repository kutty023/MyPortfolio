import React from 'react';
import '../Styles/About.css'; // Import CSS for styling
import profilePic from '../assets/img2.png'; // Adjust this path to your actual image

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h3>Hello, I'm [Your Name]</h3>
          <p>
            I am a passionate web developer with experience in creating dynamic and responsive web applications.
            I specialize in using modern technologies such as HTML, CSS, JavaScript, and React to build engaging user experiences.
          </p>
          <p>
            My goal is to continuously improve my skills and contribute to projects that make a difference.
            In my spare time, I enjoy learning new technologies and exploring the outdoors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
