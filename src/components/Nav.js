import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar">
            <div>
                <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>

            <div className="menu-buttons">
                <button>
                    <NavLink to="/about">About us</NavLink>
                </button>
                <button>
                    <NavLink to="/projects">Projecter</NavLink>
                </button>
                <button>
                    <NavLink to="/about">Contact</NavLink>
                </button>
            </div>
        </nav>
    );
};