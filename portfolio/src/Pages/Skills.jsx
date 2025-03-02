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

  const certifications =[ 
    // {name : "Cisco Certified Network Associate (CCNA) - Network Rhinos",link : ""},
    {name : "Python (HackerRank)", link : "https://www.hackerrank.com/certificates/2aa9bb395940"},
    {name : "Ethical Hacking & Penetration Testing (Udemy) - ongoing", link : ""},
    {name : "Getting Started with Packet tracer", link : "https://media.licdn.com/dms/image/v2/D4D22AQEHI6rL8Ighyw/feedshare-shrink_2048_1536/B4DZPE.frPHQAo-/0/1734176538894?e=1743638400&v=beta&t=y37K9A7TYtTYzTpA2Jqj0Em57j-kpe7b0WBomA-FGAo"},
    {name : "AICTE Virtual Internship - Cybersecurity",link : ""},
    {name : "The Complete Cyber Security Course (Udemy)",link : ""},
    {name : "Data Science Web application with Streamlit and Python",link : "https://www.coursera.org/account/accomplishments/verify/9M22K6H32NKQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project"},
    {name : "Build a Full Website using WordPress", link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ST6SQ96SFUW9/CERTIFICATE_LANDING_PAGE~ST6SQ96SFUW9.jpeg"},
    {name : "Fundamentals of Graphic Design", link:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FZ98A4W7XHT8/CERTIFICATE_LANDING_PAGE~FZ98A4W7XHT8.jpeg"},
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
      <div id="certifications">
        <h1 className="heading certi">
          <u>
            <span className="highlight-text">Certifications</span>
          </u>
        </h1>
        <div className="certifications-sec">
          {certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
};

export default Skills;

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.
