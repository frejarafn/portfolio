export default function Toolbox() {
    return (
        <div className="toolbox-grid">
            <div className="category">
                <h2>FRONTEND</h2>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Next.js</button>
                <button>Remix</button>
                <button>Tailwind CSS</button>
            </div>
            <div className="category">
                <h2>BACKEND</h2>
                <div>
                    <button>Node.js</button>
                    <button>Express</button>
                    <button>MongoDB</button>
                    <button>MySQL</button>
                    <button>Mongoose</button>
                    <button>PHP</button>
                </div>


            </div>
            <div className="category">
                <h2>DESIGN</h2>
                <button>Adobe XD</button>
                <button>Adobe Photoshop</button>
                <button>Adobe Illustrator</button>
            </div>
            <div className="category">
                <h2>OTHER</h2>
                <button>Git</button>
                <button>GitHub</button>
                <button>Heroku</button>
                <button>VS Code</button>
            </div>
        </div>
    );
}
