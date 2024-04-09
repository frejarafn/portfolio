import { NavLink } from "react-router-dom";

export default function TntBraende() {
    return (
        <div className="content">
            <div className="project-top">
                <h1>TNT BRÆNDE</h1>
                <img src="/images/tntbraende.png" alt="TNT Brænde" />
            </div>
            <div className="project-description">
                <h3>FREELANCE PROJECT</h3>
                <h2>
                    WEBSITE FOR A FIREWOOD COMPANY
                </h2>
                <button onClick={() => window.open("https://tntbraende.dk/", "_blank")}>LIVE SITE</button>
            </div>
            <div className="project-about">
                <div>
                    <h3>ABOUT THE PROJECT</h3>
                    <p>
                        TNT Brænde was a freelance project I did for a local firewood company. My task was to create a simple website where the user could see the products and prices of the company.
                        I designed the website to be clean and easy to navigate, with a focus on showcasing the products and services offered by TNT Brænde.
                        The company already had a logo and a color scheme, so I used these to create a design that matched their brand identity.
                        I built the website from scratch using HTML, CSS, and JavaScript, and it was designed to be responsive and user-friendly.

                    </p>
                </div>
            </div>
            <img src="/images/tnt-prices.png" alt="TNT Brænde prices" className="project-image" />

            <div className="project-about">
                <div>
                    <h3>THE PROBLEM</h3>
                    <p>
                        TNT Brænde did not have a website and wanted to establish an online presence to reach more customers and showcase their products and services.
                        The company wanted a simple and user-friendly website that would allow customers to easily see the products and prices offered by TNT Brænde.
                        They asked for my help to create a website that lived up to their expectations and would help them grow their business online.
                    </p>
                </div>
            </div>
            <img src="/images/tnt-send.png" alt="TNT Brænde delivery" className="project-image" />
            <div className="project-about">
                <div>
                    <h3>THE SOLUTION</h3>
                    <p>
                        In my solution, I focused on creating a clean and user-friendly website that showcased the products and prices offered by TNT Brænde. I designed the website to be responsive and easy to navigate through the use of HTML, CSS, and JavaScript.
                        I made sure to include all the necessary information about the company, including the products and prices and contact information. I kept the design simple and clean to make it easy for customers to find the information they need in the orange and black color scheme of the company.
                        I ended up with a simple but fully functional website that met the needs of TNT Brænde and helped them establish an online presence and reach more customers.
                    </p>
                </div>
            </div>
            <img src="/images/tnt-logo.png" alt="TNT Logo" className="project-tnt" />
            <button className="back-projects">
                <NavLink to="/projects">
                    BACK TO PROJECTS
                </NavLink>

            </button>

        </div>
    );
}