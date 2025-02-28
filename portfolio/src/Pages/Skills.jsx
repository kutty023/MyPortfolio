import "../Styles/Global.css";
import "../Styles/Skills.css";

const Skills = () => {
  const skillsData = [
    "Python", "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",
    "Node.js", "Express.js", "MongoDB", "Git", "VSCode", "RESTful APIs",
    "CCNA (Packet Tracer, OSI Model, TCP/IP, IPv4/IPv6)", "Ethical Hacking",
    "Steganography", "Penetration Testing", "Threat Mitigation", "Encryption",
    "Data Privacy", "Figma", "Adobe XD", "UI/UX Design", "Prototyping", 
    "Wireframing", "Flask",
  ];

  return (
    <div className="container">
      <section id="skills">
        <h1 className="heading">
          <u>
            <span className="highlight-text">Skills</span>
          </u>
        </h1>
        <div className="skills-sec">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.
