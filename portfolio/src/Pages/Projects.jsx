import know_more from '../assets/know_more.png';
import '../Styles/Global.css';
import '../Styles/Project.css';

function Project(){
    const projectsData = [
        {
            title : "Taskmanger (Ongoing)", 
            desc : ["Designed end-to-end user flows and high-fidelity UI for a role-based task management platform. Built scalable design systems and reusable UI patterns focused on clarity, usability, and accessibility."], 
            github : "https://github.com/kutty023/task-manager"
        },
        {
            title : "Nove (Ongoing)", 
            desc : ["Designed and developing a full-stack MERN application for novelists to post and engage with their original works, featuring likes, comments, sharing, and user interaction features.","Tech Stack : Figma, React.js, Node.js, Express.js, MongoDB, Git, GitHub, VSCode"],
            github : "https://github.com/kutty023/Nove"
        },
        {
            title : " MyPortfolio", 
            desc : ["Designed a fully responsive and interactive personal portfolio which highlights my projects, expertise, certifications, etc, in a structured and visually appealing format. Implemented smooth scroll-based navigation, and optimized the layout for seamless mobile responsiveness ", "Tech Stack : HTML, CSS, JavaScript, React.js, CSS, Vercel, Git, Figma"], 
            github : "https://github.com/kutty023/MyPortfolio"
        },
        {
            title : "OTP Generation", 
            desc : ["This project showcases different Python-based OTP generation methods, ranging from basic pseudo-random generators to secure cryptographic and time-based OTPs", "Tech Stack : HTML, CSS, JavaScript, Flask, Fetch API (JS), Render, Gunicorn"], 
            github : "https://github.com/kutty023/OTP-Generator"
        },
        {
            title : "Secure Data Hiding in Image Using Steganography", 
            desc : ["This project provides a secure method to hide and retrieve messages within images using steganography. It enables users to encrypt text messages inside images using a password and later decrypt them using the same password. The implementation includes both frontend and backend components to facilitate seamless encryption and decryption.", "Teach Stack : Python, LSB, OpenCV, Flask, HTML, CSS, and JavaScript, Render."], 
            github : "https://github.com/kutty023/Secure-Data-Hiding-in-Image-Using-Steganography/"
        }
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
                        <h4 className="sub-heading">{project.title}</h4>
                        <ul className="card-content">
                            {project.desc.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
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

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.