export default function Sailmore() {
    return (
        <div className="content">
            <div className="project-top">
                <h1>SAILMORE</h1>
                <img src="/images/sailmore.png" alt="Sailmore" />
            </div>
            <div className="project-description">
                <h3>1ST SEMESTER EXAM</h3>
                <h2>
                    WEB APPLICATION FOR A SAILING COMPANY
                </h2>
                <button onClick={() => window.open("https://sailmore.nicolaidige.dk/", "_blank")}
                >LIVE SITE
                    <br></br>
                    VIEW ON MOBILE
                </button>
            </div>
            <div className="project-about">
                <div>
                    <h3>ABOUT THE PROJECT</h3>
                    <p>
                        Sailmore was an exam project in the first semester of my web development education. The exam task was to create a web application for a real sailing company - Sailmore.
                        Sailmore is a company that offers sailing trips all around the world and the project was built with the purpose of giving the company a digital platform where they could present their services and allow customers to book trips and
                        allow sailors to create trips.

                    </p>
                </div>
            </div>
            <img src="/images/sail-style.png" alt="Sailmore styletile" className="project-image" />
            <div className="project-about">
                <div>
                    <h3>THE PROBLEM</h3>
                    <p>
                        The company only had a temporary digital platform where they could present their services and allow customers to book trips and sailors to create trips.
                        The platform was not user-friendly and the company wanted a more professional and user-friendly platform where they could present their services and allow customers to book trips and sailors to create trips.
                        He asked for our help to create a new platform that would be more user-friendly and professional since we have a lot of knowledge about web development.
                    </p>
                </div>
            </div>
            <img src="/images/info-arc.png" alt="Sailmore information architecture" className="project-image" />
            <div className="project-about">
                <div>
                    <h3>THE SOLUTION</h3>
                    <p>
                        In our solution we focused on making the gast-interface for the platform. Our site is a mobile web application that is easy to use and navigate. The site is built with HTML, CSS, JavaScript and PHP. We made it possible for the user to sign up and log in to the site, create a profile, edit a profile and book trips.
                        You have to be logged in as a user to book a trip but you do not have to be logged in to see the trips that are available.
                        We used a JSON based API to send and receive data from the database. We made the frontend with React, backend in PHP and MySQL for the database.
                    </p>
                </div>
            </div>
            <div className="sailmore-grid">
                <img src="/images/sail-1.png" alt="Sailmore trips" className="project-image" />
                <img src="/images/sail-2.png" alt="Sailmore information" className="project-image" />
            </div>
            <button className="back-projects">
                <a href="/projects">
                    BACK TO PROJECTS
                </a>
            </button>
        </div>
    );
}