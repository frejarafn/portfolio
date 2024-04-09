import { NavLink } from "react-router-dom";

export default function LadyLinkup() {
    return (
        <div className="content">
            <div className="project-top">
                <h1>LADY LINKUP</h1>
                <img src="/images/lady-linkup.png" alt="Lady LinkUp" />
            </div>
            <div className="project-description">
                <h3>2ND SEMESTER EXAM</h3>
                <h2>
                    EVENT APP FOR WOMEN
                </h2>
                <button onClick={() => window.open("https://awu-exam-frejarafn.onrender.com", "_blank")}>LIVE SITE</button>
            </div>
            <div className="project-about">
                <div>
                    <h3>ABOUT THE PROJECT</h3>
                    <p>
                        Lady LinkUp was an exam project in the second semester of my web development education. The exam task was to create an event portal where the user could use all the CRUD operations in the form of read, post, delete and update.
                        The theme of the project was open to interpretation, so I decided to build a platform where women could create and join different types of events and connect with each other.
                    </p>
                </div>
                <img src="/images/ladylinkup-1.png" alt="Lady LinkUp" className="project-image" />

                <div className="project-about">
                    <div>
                        <h3>THE PROBLEM</h3>
                        <p>
                            Since the project was open to interpretation, I had to come up with a problem that I wanted to solve. I wanted to create a platform were women could connect with other women through interests and events.
                            I wanted to create a safe space with events that people actually wanted to attend and where they could meet other people and make new friends. The platform should be easy to use and navigate and have a clean and simple design.
                        </p>
                    </div>
                </div>
                <img src="/images/lady-profile.png" alt="Lady LinkUp Profile" className="project-image" />

            </div>
            <div className="project-about">
                <div>
                    <h3>THE SOLUTION</h3>
                    <p>
                        In my solution I focused on making the platform user-friendly and easy to navigate. I made it possible for the user to sign up and log in to the site, create a profile, edit a profile, create events, join events and delete events.
                        You have to be logged in as a user to create an event but you do not have to be logged in to see the events that are available. I achieved this by using Remix, Remix auth, Bcrypt, MongoDB, Mongoose, Tailwind CSS and Render.
                        I made sure to hash the users passwords and store them in the database and I made sure to validate the users input to prevent any malicious code from being injected into the database.
                        I ended up with a simple but fully functional platform were the user is able to do anyhthing I set out to do in the beginning.
                    </p>
                </div>
            </div>
            <div>
                <img src="/images/ladylinkup-2.png" alt="Lady LinkUp Event" className="project-image" />
            </div>
            <button className="back-projects">
                <NavLink to="/projects">
                    BACK TO PROJECTS
                </NavLink>

            </button>
        </div>
    );
}