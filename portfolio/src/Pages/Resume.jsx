
function Resume(){
    const experienceData = [
        {
            id: 1,
            title: 'Web Developer',
            company: 'ABC Company',
            date_and_location: '2019 - 2021',
            desc: 'I have worked as a web developer for 2 years. I have worked on various projects and gained experience in web development.'
        },
        {
            id: 2,
            title: 'Full-Stack Developer',
            date: '2021 - Present',
            desc: 'I have been working as a full-stack developer for more than a year. I have worked on various projects and gained experience in full-stack development.'
        },
        {
            id: 3,
            title: 'Front-End Developer',
            date: '2018 - 2019',
            desc: 'I have worked as a front-end developer for a year. I have worked on various projects and gained experience in front-end development.'
        }
    ];

    const educationData = [
        {
            id: 1,
            title: 'B.Tech in Computer Science',
            school: 'XYZ University',
            date_and_location: '2015 - 2019',
            desc: 'I have completed my B.Tech in Computer Science from XYZ University in 2019.'
        },
    ];

    return (
        <>
            <section className='resume'>
                <h1 id="heading"><u> Resume </u></h1>
                <div id="resume-sec">
                    <div className="experience">
                        <h3>Experience</h3>
                        {experienceData.map((experience,) => {
                            return (
                                <div key={experience.id} className="experience-item">
                                    <h4>{experience.title}</h4>
                                    <h4>{experience.company}</h4>
                                    <p>{experience.date_and_location}</p>
                                    <p>{experience.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        {educationData.map((education) => {
                            return (
                                <div key={education.id} className="education-item">
                                    <h4>{education.title}</h4>
                                    <h4>{education.school}</h4>
                                    <p>{education.date_and_location}</p>
                                    <p>{education.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume