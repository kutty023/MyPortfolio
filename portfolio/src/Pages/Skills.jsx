const skills = {
  "Python": 80,
  "JavaScript": 75,
  "C++": 70,
  "Java": 78,
  "HTML": 85,
  "CSS": 82,
  "MongoDB": 76,
  "React.js": 80,
  "Git": 74,
  "SQL": 79,
  "Ethical Hacking": 77,
  "Data Privacy": 73,
  "OSINT": 72,
  "AdobeXD": 70,
  "Django": 75,
  "Flask": 70,
  "UX": 80,
  "Encryption": 78,
  "Decryption": 76,
  "Express.js": 74,
  "Node.js": 77
};

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill">
      <p>
        {skill} <span>{level}%</span>
      </p>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${level}%`, background: "red", height: "10px"}}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      {Object.entries(skills).map(([skill, level], index) => (
        <SkillBar key={index} skill={skill} level={level} />
      ))}
    </div>
  );
};

export default Skills;
