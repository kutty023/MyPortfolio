import '../Styles/Global.css'


function Resume(){
    const experienceData = [
        {
          id: 1, 
          title: "Web Developer", 
          company: "ABC Company",
          date_and_location: "2019 - 2021, Bangalore",
          desc: "Worked as a web developer for 2 years, gaining experience in various projects."
        },
        {
          id: 2,
          title: "Full-Stack Developer",
          company: "XYZ Tech",
          date_and_location: "2021 - Present, Bangalore",
          desc: "Currently working as a full-stack developer, gaining expertise in full-stack development."
        },
        {
          id: 3,
          title: "Front-End Developer",
          company: "DEF Solutions",
          date_and_location: "2018 - 2019, Bangalore",
          desc: "Worked as a front-end developer for a year, contributing to multiple UI projects."
        }
      ];
    
      const educationData = [
        {
          id: 1,
          title: "B.Tech in Computer Science",
          school: "XYZ University",
          date_and_location: "2015 - 2019, Bangalore",
          cgpa: "8.5 CGPA"
        },
        {
          id: 2,
          title: "Higher Secondary Education",
          school: "ABC School",
          date_and_location: "2013 - 2015, Bangalore",
          cgpa: "90%"
        },
        {
          id: 3,
          title: "Secondary Education",
          school: "DEF School",
          date_and_location: "2012 - 2013, Bangalore",
          cgpa: "95%"
        }
      ];

    return (
        <>
            <div className="container">
                <section className='resume'>
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
                                        <p>{date_and_location}</p>
                                        <p>{desc}</p>
                                    </div>
                                ))}
                        </div>
                        <div className="education">
                            <h3>Education</h3>
                            {educationData.map(({id, title, school, date_and_location, cgpa}) => (
                                    <div key={id} className="education-item">
                                        <h4>{title}</h4>
                                        <h4>{school}</h4>
                                        <p>{date_and_location}</p>
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