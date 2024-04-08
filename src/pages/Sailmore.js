export default function Sailmore() {
    return (
        <div className="content">
            <div className="project-top">
                <h1>SAILMORE</h1>
                <img src="/images/sailmore.png" alt="Lady LinkUp" />
            </div>
            <div className="project-description">
                <h3>1ST SEMESTER EXAM</h3>
                <h2>
                    WEB APPLICATIO FOR A SAILING COMPANY
                </h2>
                <button onClick={() => window.open("https://sailmore.nicolaidige.dk/", "_blank")}>LIVE SITE</button>
            </div>
            <div className="project-about">
                <div>
                    <h3>ABOUT THE PROJECT</h3>
                    <p>
                        Lady LinkUp was an exam project in the second semester of my web development education. The exam task was to create an event portal where the user could use all the CRUD operations in the form of read, post, delete and update.
                        The theme of the project was open to interpretation, so I decided to build a platform where women could create and join different types of events.
                    </p>
                </div>
            </div>
        </div>
    );
}