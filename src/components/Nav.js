import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    const [isContactPopupOpen, setContactPopupOpen] = useState(false);

    const openContactPopup = () => {
        setContactPopupOpen(true);
    };

    const closeContactPopup = () => {
        setContactPopupOpen(false);
    };
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/">
                    <img src="/images/logo.png" alt="Logo" className="logo" />
                </NavLink>
            </div>

            <div className="menu-buttons">
                <button>
                    <NavLink to="/about">About me</NavLink>
                </button>
                <button>
                    <NavLink to="/projects">Projects</NavLink>
                </button>
                <button onClick={openContactPopup}>Contact</button>
            </div>
            {isContactPopupOpen && (
                <div className="contact-popup">
                    <div className="popup-content">
                        <h2>CONTACT ME</h2>
                        <a href="mailto:frejavangilst@gmail.com">frejavangilst@gmail.com</a>
                        <p></p>
                        <a href="tel:+4542803370">+45 42 80 33 70</a>
                        <br></br>
                        <button onClick={closeContactPopup}>Close</button>
                    </div>
                </div>
            )}
        </nav>
    );
};