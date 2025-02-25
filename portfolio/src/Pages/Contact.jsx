import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";
import insta from "../assets/insta.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import email from "../assets/email.png";
import phone from "../assets/phonecall.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
            setStatus("Please fill in all fields.");
            return;
        }

        setLoading(true); // Disable button & show loading

        const serviceId = "service_78a0emo";
        const templateId = "template_flq3en5";
        const publicKey = "IAGnxQjnfmifLPAgz";

        const emailParams = {
            from_name: formData.user_name,
            from_email: formData.user_email,
            to_name: "Arthi R",
            subject: formData.subject,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceId, templateId, emailParams, publicKey);
            setStatus("Message sent successfully!");
            setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus("Failed to send message!");
        } finally {
            setLoading(false); // Re-enable button
        }
    };

    const socialMediaLinks = [
        { id: "insta-png", alt: "Instagram", src: insta, link: "https://instagram.com" },
        { id: "github-png", alt: "GitHub", src: github, link: "https://github.com" },
        { id: "linkedin-png", alt: "LinkedIn", src: linkedin, link: "https://linkedin.com" },
        { id: "twitter-png", alt: "Twitter", src: twitter, link: "https://twitter.com" },
    ];

    return (
        <div className="container">
            <section className="contact">
                <h1 id="contact-heading">
                    <u>
                        <span className="highlight-text"> Contact Me </span>
                    </u>
                </h1>

                <div id="contact-sec">
                    {/* Contact Form */}
                    <div className="write-section">
                        <h4>Write to me!</h4>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="user_name">Name:</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Enter your name"
                                required
                                value={formData.user_name}
                                onChange={handleChange}
                            />
                            <label htmlFor="user_email">Email:</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Enter your email"
                                required
                                value={formData.user_email}
                                onChange={handleChange}
                            />
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                            <button type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>

                        {status && <p className="status-message">{status}</p>}
                    </div>

                    {/* Contact Information */}
                    <div className="reach-section">
                        <h4>Reach out to me</h4>
                        <div id="email-png">
                            <img src={email} alt="email" />
                            <p>arthiowr2024@gmail.com</p>
                        </div>
                        <div id="phone-number-png">
                            <img src={phone} alt="phno" />
                            <p>9108161367</p>
                        </div>

                        <p>Let’s stay connected!</p>
                        <div id="connect-pngs">
                            {socialMediaLinks.map(({ id, alt, src, link }) => (
                                <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                                    <img src={src} alt={alt} id={id} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
