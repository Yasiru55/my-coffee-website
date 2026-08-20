import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-heading">
                <p className="section-label">CONTACT US</p>
                <h2>Come Visit Us</h2>
                <p>We would love to welcome you to My Coffee.</p>
            </div>

            <div className="contact-content">

                <div className="contact-info">
                    <h3>Visit Our Coffee Shop</h3>

                    <p>📍 123 Coffee Street, Colombo</p>
                    <p>📞 +94 77 123 4567</p>
                    <p>✉️ hello@mycoffee.com</p>

                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                    {submitted && (
                        <p className="success-message">
                            ✅ Thank you! Your message has been received.
                        </p>
                    )}
                </form>

            </div>
        </section>
    );
}

export default Contact;