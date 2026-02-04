import "../Styles/Global.css";
import "../Styles/Resume.css";

function Resume() {
  const experienceData = [
    {
      id: 1, 
      title: "IT Engineer", 
      company: "Desai Clothing Exports Pvt Ltd",
      date_and_location: "June 2025 - Present, Bangalore",
      desc: [
        "Analyzed operational workflows, partnered with stakeholders to deliver scalable, technology-driven solutions",
        "Designed and developed internal task and communication systems to improve visibility, coordination, and turnaround time.",
        "Automated routine processes to reduce manual effort and enhance overall operational efficiency."
      ]
    },
    {
      id: 2, 
      title: "Web Developer", 
      company: "Cappricio Securities",
      date_and_location: "March 2025 - June 2025, Remote",
      desc: [
        "Designed and developed a responsive mobile web application using Figma, HTML, CSS, and JavaScript, ensuring usability, performance, and secure implementation."
      ]
    },
    {
      id: 3,
      title: "Technical Mentor",
      company: "Kalvium",
      date_and_location: "Mar 2023 - Aug 2024, Bangalore",
      desc: [
        "Led technical mentoring across UI/UX design, full-stack web development, DSA, and core programming fundamentals, ensuring industry-aligned skill development.",
        "Reviewed and evaluated 100+ UI/UX design files and multiple full-stack projects, delivering actionable feedback on usability, design systems, and code quality.",
        "Contributed to a WhatsApp automation solution that improved response efficiency.",
        "Supported sprint coordination and team collaboration activities."
      ]
    },
  ];

  const educationData = [
    {
      id: 1,
      title: "B.Tech in Computer Science Engineering",
      school: "REVA University",
      date_and_location: "2019 - 2023, Bangalore",
      cgpa: "8.42 CGPA"
    }
  ];

  return (
    <div className="container">
      <section id="resume">
        <h1 className="heading">
          <u>
            <span className="highlight-text">Resume</span>
          </u>
        </h1>
        <div id="resume-sec">
          <div className="experience">
            <h3>Experience</h3>
            {experienceData.map(({ id, title, company, date_and_location, desc }) => (
              <div key={id} className="experience-item">
                <h4>{title}</h4>
                <p>{company}</p>
                <p className="date">{date_and_location}</p>
                <ul id="exp-description">
                  {desc.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="education">
            <h3>Education</h3>
            {educationData.map(({ id, title, school, date_and_location, cgpa }) => (
              <div key={id} className="education-item">
                <h4>{title}</h4>
                <p>{school}</p>
                <p className="date">{date_and_location}</p>
                <p>{cgpa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.
