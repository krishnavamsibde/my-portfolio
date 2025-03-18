import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo */}
                <a href="index.html" className="nav__logo">Krishna Vamsi</a>

                {/* Navigation Menu */}
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                                onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills"
                                onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects"
                                onClick={() => setActiveNav("#projects")}
                                className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact"
                                onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Toggle & Close Buttons */}
                <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                <i className="uil uil-apps nav__toggle" onClick={() => showMenu(!Toggle)}></i>
            </nav>
        </header>
    );
}

export default Header;
