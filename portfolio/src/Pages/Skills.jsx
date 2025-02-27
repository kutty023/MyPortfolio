import '../Styles/Global.css'


const Skills = () => {
  const skillsData = {
    "Python": 80,"JavaScript": 75, "C++": 70, "Java": 78, "HTML": 85, "CSS": 82, "MongoDB": 76, "React.js": 80, "Git": 74, "SQL": 79, "Ethical Hacking": 77, "Data Privacy": 73, "OSINT": 72, "AdobeXD": 70, "Django": 75, "Flask": 70, "UX": 80, "Encryption": 78, "Decryption": 76,"Express.js": 74, "Node.js": 77
  };

  return (
    <>
      <div className="container">
        <section id="skills">
          <h1 id="skills-heading">
            <u>
              <span className="highlight-text">Skills</span>
              </u>
          </h1>
          <div className="skills-sec">
            {Object.entries(skillsData).map(([skill, level], index) => (
              <div className="skill-item" key={index}>
                <p className="skill-name">
                  {skill} <span className="skill-level" > {level}%</span>
                </p>
                <div className="progress-bar">
                  <div className="fill" style={{ width: `${level}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;


// , background: '#F4B675', height:'10px' 
// style={{ paddingLeft: "50px"}}