import myFirstProfileImg from '../assets/img1.png';
import '../Styles/Global.css'
import '../Styles/Home.css';

function Home() {
  return (
    <div id="home-container" className='container'>
      <section id='home'>
        <div className='profile-image1'>
          <img src={myFirstProfileImg} alt="prof-img" />
        </div>
        <div className="home-content">
          <h3 id='home-wlcm'>Hi, I'm </h3> 
          <h1 id='home-name'> ARTHI R</h1>
          <p id='home-designation'>Full-Stack Developer with Design Skills</p>
        </div>
      </section>
    </div>
  )
}

export default Home

//  © 2025 Arthi. All rights reserved. Unauthorized copying prohibited.
