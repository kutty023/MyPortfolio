
function Services(){
    const servicesData = [
        {
          title: "Web Development",
          description: "Building responsive websites with modern technologies.",
        },
        {
          title: "UI/UX Design",
          description: "Designing user-friendly interfaces with Figma and Adobe XD.",
        },
        {
          title: "Mobile App Development",
          description: "Creating mobile applications using React Native and Flutter.",
        },
        {
          title: "SEO",
          description: "Optimizing websites to improve search engine visibility.",
        },
        {
          title: "IAM",
          description: "Managing user identities and their access to resources.",
        },
        { 
            title: "Cybersecurity",
            description: "Protecting systems, networks, and programs from digital attacks.",
        },
      ];
    
      return (
        <section className="services">
          <h1 id="heading">
            <u>Services</u>
          </h1>
          <div id="service-sec">
            {servicesData.map((service, index) => (
              <div key={index} className="service-section">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Services