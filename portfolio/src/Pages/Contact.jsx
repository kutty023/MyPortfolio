import React from 'react'
import '../Styles/Contact.css'

function Contact(){
    return (
        <>
        <section className='contact'>
            <h1 id="heading"><u> Contact Me</u></h1>
            <div id="contact-sec">
                <div className="write-section">
                    <h4>Write to me!</h4>
                    <form>
                        <input type="text" placeholder="Enter your name" required /><br/>
                        <input type="email" placeholder="enter your email" required /><br/>
                        <input type="text" placeholder="Subject" required /><br/>
                        <textarea placeholder="Your Message" required></textarea><br/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="reach-section">
                    <h4>Reach out to me</h4>
                    <div id="email-png">
                        <img src="" alt="email" />
                        <p>arthiowr2024@gmail.com</p>
                    </div>
                    <div id="phone-number-png">
                        <img src="" alt="phno" />
                        <p>9108161367</p>
                    </div>
                    <p>Let’s stay connected!</p>
                    <div id="connect-pngs">
                        <img src="/" alt="insta" id="insta-png" />
                        <img src="" alt="github" id="github-png" />
                        <img src="" alt="linkedin" id="linkedin-png" />
                        <img src="" alt="twitter" id="twitter-png" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact