import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        if (toggleState === index) {
            setToggleState(0); // Close modal if the same one is clicked again
        } else {
            setToggleState(index);
        }
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I Have Built</span>

            <div className="projects__container container grid">
                {/* Project 1 - Frontend Development */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-brackets-curly projects__icon"></i>
                        <h3 className="projects__title">Frontend <br /> Development</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                </div>

                {/* Project 2 - Backend Development */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-server projects__icon"></i>
                        <h3 className="projects__title">Backend <br /> Development</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                </div>

                {/* Project 3 - Full Stack Development */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-layer-group projects__icon"></i>
                        <h3 className="projects__title">Full Stack <br /> Development</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                </div>
            </div>

            {/* Modals */}
            <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="projects__modal-title">Frontend Development</h3>
                    <p className="projects__modal-description">
                        Crafting visually appealing and interactive user interfaces.
                    </p>
                </div>
            </div>

            <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="projects__modal-title">Backend Development</h3>
                    <p className="projects__modal-description">
                        Creating scalable and secure server-side solutions.
                    </p>
                </div>
            </div>

            <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="projects__modal-title">Full Stack Development</h3>
                    <p className="projects__modal-description">
                        Combining frontend & backend for complete web solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
