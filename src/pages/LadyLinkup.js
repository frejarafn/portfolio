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
                <div>
                    <img src="/images/ladylinkup-1.png" alt="Lady LinkUp" />
                    <img src="/images/ladylinkup-2.png" alt="Lady LinkUp" />
                </div>

            </div>
        </div>
    );
}