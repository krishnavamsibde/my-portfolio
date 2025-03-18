import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        if (toggleState === index) {
            setToggleState(0); // Close modal if the same one is clicked again
        } else {
            setToggleState(index);
        }
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {/* Service 1 - Frontend Development */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Frontend <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                {/* Service 2 - Backend Development */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-server services__icon"></i>
                        <h3 className="services__title">Backend <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                {/* Service 3 - Full Stack Development */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-layer-group services__icon"></i>
                        <h3 className="services__title">Full Stack <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
            </div>

            {/* Modals */}
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="services__modal-title">Frontend Development</h3>
                    <p className="services__modal-description">
                        Crafting visually appealing and interactive user interfaces.
                    </p>
                </div>
            </div>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="services__modal-title">Backend Development</h3>
                    <p className="services__modal-description">
                        Creating scalable and secure server-side solutions.
                    </p>
                </div>
            </div>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="services__modal-title">Full Stack Development</h3>
                    <p className="services__modal-description">
                        Combining frontend & backend for complete web solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
