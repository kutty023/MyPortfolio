
function Project(){
    const projectsData = [
        {
            title : "Project 1",
            description : "Description of Project 1",
        },
        {
            title : "Project 2",
            description : "Description of Project 2",
        },
        {
            title : "Project 3",
            description : "Description of Project 3",
        },
        {
            title : "Project 4",
            description : "Description of Project 4",
        },
        {
            title : "Project 5",
            description : "Description of Project 5",
        },
        {
            title : "Project 6",
            description : "Description of Project 6",
        },
        {
            title : "Project 7",
            description : "Description of Project 7",
        },
        {
            title : "Project 8",
            description : "Description of Project 8",
        },
    ];
    return (
        <>
            <section className='projects'>
                <h1 id="heading"><u> My Projects </u></h1>
                <div id="projects-sec">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-section">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Project