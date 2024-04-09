import PortfolioItem from "../components/PortfolioItem";

export default function ProjectsPage() {
    return (
        <div className="projects">
            <h1>MY PROJECTS</h1>
            <h2>
                Here are some of the projects I have worked on. Click on the images to learn more about each project.
            </h2>
            <div className="portfolio-grid">
                <PortfolioItem imageSrc="/images/ladylinkup-project.png" title="Lady LinkUp" link="/ladylinkup" />
                <PortfolioItem imageSrc="/images/sailmore-project.png" title="Sailmore" link="/sailmore" />
                <PortfolioItem imageSrc="/images/tnt-project.png" title="TNT Brænde" link="/tntbraende" />

            </div>
        </div>
    );
}