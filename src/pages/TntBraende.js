export default function TntBraende() {
    return (
        <div className="content">
            <div className="project-top">
                <h1>TNT BRÆNDE</h1>
                <img src="/images/tntbraende.png" alt="Lady LinkUp" />
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
                        I built the website from scratch using HTML, CSS, and JavaScript, and it was designed to be responsive and user-friendly.

                    </p>
                </div>
            </div>
        </div>
    );
}