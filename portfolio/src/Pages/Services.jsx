import '../Styles/Global.css'


function Services(){
    const servicesData = [
      { title: "Web Development", description: "Building responsive websites with modern technologies." },
      { title: "UI/UX Design", description: "Designing user-friendly interfaces with Figma and Adobe XD." },
      { title: "Mobile App Development", description: "Creating mobile applications using React Native and Flutter." },
      { title: "SEO", description: "Optimizing websites to improve search engine visibility." },
      { title: "IAM", description: "Managing user identities and their access to resources." },
      { title: "Cybersecurity", description: "Protecting systems, networks, and programs from digital attacks." },
    ];
    
      return (
        <>
        <div className="container">
          <section className="services" >
            <h1 className="heading">
              <u>
                <span className="highlight-text"> Services </span> 
              </u>
            </h1>
            <div id="service-sec">
              {servicesData.map((service, index) => (
                <article key={index} className="service-card">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
        </>
      );
}

export default Services