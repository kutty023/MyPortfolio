import '../Styles/Global.css'
import '../Styles/Services.css'

function Services(){
    const servicesData = [
      { title: "Full-Stack Developer", description: "Designed, developed, and maintained web applications from front to back" },
      { title: "MERN Stack Developer", description: "Creating mobile applications using React Native and Flutter." },
      { title: "Front-End Developer", description: "Creating user interfaces and experiences" },
      { title: "UI/UX Design", description: "Specialization in MongoDB, Express.js, React.js, and Node.js development." },
      { title: "Web Application Security Analyst", description: "Identifying and mitigating security vulnerabilities." },
      { title: "CCNA ", description: "Cisco Certified Network Associate" },
      { title: "Technical Mentor ", description: "Guiding and trained aspiring developers" },
      { title: "Coding Instructor ", description: "Teaching programming and web development skills." },
    ];
    
      return (
        <>
        <div className="container">
          <section id="services" >
            <h1 className="heading">
              <u>
                <span className="highlight-text"> Services </span> 
              </u>
            </h1>
            <div id="service-sec">
              {servicesData.map((service, index) => (
                <article key={index} className="service-card">
                  <h4 className='sub-heading'>{service.title}</h4>
                  <p className='card-content'>{service.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
        </>
      );
}

export default Services

// © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.