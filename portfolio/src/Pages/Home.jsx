import myFirstProfileImg from '../assets/img1.png';

import '../Styles/Home.css';

function Home() {
  return (
    <>
    <div className='container'>
      <section className='Home'>
        <div className='my-first-image'>
          <img src={myFirstProfileImg} alt="prof-img" />
        </div>
        <div className="home-content">
          <h3>Hi, I'm </h3> 
          <h1> ARTHI R</h1>
          <p>Full-Stack Developer with Design Skills</p>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home
