import PortfolioItem from "../components/PortfolioItem";

export default function ProjectsPage() {
    return (
        <div className="projects">
            <h1>MY PROJECTS</h1>
            <h2>
                Here are some of the projects I have worked on. Click on the images to learn more about each project.
            </h2>
            <div className="portfolio-grid">
                <PortfolioItem imageSrc="/images/Profil.jpg" title="Projekt 1" link="/projects/project1" />
                <PortfolioItem imageSrc="/images/Profil.jpg" title="Projekt 1" />
                <PortfolioItem imageSrc="/images/Profil.jpg" title="Projekt 1" />
                <PortfolioItem imageSrc="/images/Profil.jpg" title="Projekt 1" />

            </div>
        </div>
    );
}