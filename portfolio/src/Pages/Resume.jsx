import '../Styles/Global.css'
import '../Styles/Resume.css'

function Resume(){
    const experienceData = [
        {
          id: 1, 
          title: "AICTE Virtual Internship - Cybersecurity Program", 
          company: "Edunet Foundation",
          date_and_location: "2019 - 2021, Bangalore",
          desc: [
            " - Gaining hands-on experience in cybersecurity concepts, ethical hacking, and network security.", <br />,
            " - Working on real-world security projects, focusing on steganography, penetration testing, and threat mitigation."]
        },
        {
          id: 2,
          title: "Technical Mentor [FullStack developer]",
          company: "Kalvium (RV University)",
          date_and_location: " May 2023 - Aug 2024, Bangalore",
          desc: [
            " - Spearheaded 100+ live sessions and workshops, empowering students to build robust web applications and achieve a 90% improvement in project completion rates.",<br />,
            " - Evaluated 1500+ assignments, ensuring adherence to coding standards and improving code quality by 95%.",<br />,
            " - Trained 15+ technical mentors, enhancing team efficiency by 80% and boosting student satisfaction through streamlined mentoring practices.",<br />,
            " - Mentored 120+ students in Data Structures & Algorithms (DSA) and full-stack development, facilitating skill-building in Python, JavaScript, React.js, Node.js, and MongoDB."

          ]
        },
        {
          id: 3,
          title: "Technical Mentor Intern [Front-end developer]",
          company: "Kalvium",
          date_and_location: " Mar 2023 - April 2023, Coimbatore",
          desc:[
            " - Guided 25+ students in front-end development, achieving an 85% improvement in project quality and code maintainability.", <br />,
            " - Engineered a WhatsApp automation system using Google Apps Script, streamlining communication workflows and reducing response times by 70%", <br />,
            " - Led Scrum ceremonies for a team of 10 interns, ensuring 100% on-time project delivery and fostering a culture of collaboration and accountability."
          ]
        }
      ];
    
    const educationData = [
      {
        id: 1,
        title: "B.Tech in Computer Science Engineering ",
        school: "REVA University",
        date_and_location: "2019 - 2023, Bangalore",
        cgpa: "8.42 CGPA"
      }
    ];

    return (
        <>
            <div className="container">
                <section id='resume'>
                    <h1 className="heading">
                        <u> 
                            <span className="highlight-text"> Resume </span>  
                        </u>
                    </h1>
                    <div id="resume-sec">
                        <div className="experience">
                            <h3>Experience</h3>
                            {experienceData.map(( {id, title, company, date_and_location,desc}) => (
                                    <div key={id} className="experience-item">
                                        <h4>{title}</h4>
                                        <p>{company}</p>
                                        <p className="date">{date_and_location}</p>
                                        <p id='exp-discription'>{desc}</p>
                                    </div>
                                ))}
                        </div>
                        <div className="education">
                            <h3>Education</h3>
                            {educationData.map(({id, title, school, date_and_location, cgpa}) => (
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
        </>
    )
}

export default Resume

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.