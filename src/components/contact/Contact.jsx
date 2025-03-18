import React from "react";
import "./contact.css";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload
        e.target.reset();  // Reset form fields
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                {/* Left Section: Contact Info */}
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        {/* Email Contact */}
                        <div className="contact__card">
                            <i className="bx bx-envelope contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">krishnanek9@gmail.com</span>
                            <a href="mailto:krishnanek9@gmail.com" className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        {/* WhatsApp Contact */}
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">314-325-6858</span>
                            <a href="https://api.whatsapp.com/send?phone=3143256858&text=Hello, more information!"
                                className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        {/* Messenger Contact */}
                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">nvgkvamsi</span>
                            <a href="https://m.me/nvgkvamsi" className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    {/* Contact Form */}
                    <form className="contact__form" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="contact__form-group">
                            <input type="text" id="name" className="contact__input" placeholder=" " required />
                            <label htmlFor="name" className="contact__form-label">Name</label>
                        </div>

                        {/* Email Field */}
                        <div className="contact__form-group">
                            <input type="email" id="email" className="contact__input" placeholder=" " required />
                            <label htmlFor="email" className="contact__form-label">Mail</label>
                        </div>

                        {/* Project Field */}
                        <div className="contact__form-group">
                            <textarea id="project" className="contact__input contact__textarea" placeholder=" " required></textarea>
                            <label htmlFor="project" className="contact__form-label">Project</label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="contact__button">
                            Send Message <i className="bx bx-send"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
