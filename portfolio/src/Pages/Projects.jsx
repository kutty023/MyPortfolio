import know_more from '../assets/know_more.png';
import '../Styles/Global.css';
import '../Styles/Project.css';

function Project(){
    const projectsData = [
        {
            title : "Project 1", desc : "Description of Project 1", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 2", desc : "Description of Project 2", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 3", desc : "Description of Project 3", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 4", desc : "Description of Project 4", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 5", desc : "Description of Project 5", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 6", desc : "Description of Project 6", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 7", desc : "Description of Project 7", github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "Project 8", desc : "Description of Project 8", github : "https://github.com/kutty023/MyPortfolio"
        },
    ];
    return (
        <div className="container">
            <section id='projects'>
                <h1 className="heading">
                    <u> 
                        <span className="highlight-text">My Projects</span>  
                    </u>
                </h1>
                <div id="projects-sec">
                    {projectsData.map((project, index) => (
                        <article key={index} className="project-card">
                            <h4 className='sub-heading'>{project.title}</h4>
                            <p className='card-content'>{project.desc}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" >
                                <img id="know-more-btn" src={know_more} alt="Know more" /> 
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Project