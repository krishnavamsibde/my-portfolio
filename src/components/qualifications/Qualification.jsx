import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 ? "qualification__button qualification__active" : "qualification__button"} 
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification__button qualification__active" : "qualification__button"} 
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Content */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master's in Information Technology</h3>
                                <span className="qualification__subtitle">Arizona State University, Tempe, AZ</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2021 - May 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelor's in Information Technology</h3>
                                <span className="qualification__subtitle">JNT University Kakinada, India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sep 2014 - Apr 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Content */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {[
                            { title: "Senior Software Engineer", company: "Crawford Software, NH", date: "Oct 2024 - Present" },
                            { title: "Software Engineer", company: "HCL Global Systems Inc, GA", date: "Jan 2023 - Oct 2024" },
                             { title: "Technology Assistant", company: "Ariozona State University, AZ", date: "Feb 2022 - Jan 2023" }, 
                            // { title: "Software Engineer", company: "Global Tech, India", date: "Aug 2019 - Jul 2021" },
                            // { title: "Junior .Net Developer", company: "Byte Works Solutions, India", date: "Jun 2018 - Aug 2019" }
                        ].map((job, index) => (
                            <div className="qualification__data" key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div>
                                            <h3 className="qualification__title">{job.title}</h3>
                                            <span className="qualification__subtitle">{job.company}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i> {job.date}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification__title">{job.title}</h3>
                                            <span className="qualification__subtitle">{job.company}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i> {job.date}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
