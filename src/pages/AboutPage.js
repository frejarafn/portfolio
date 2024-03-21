import ImageSlider from "../components/ImageSlider";
import Toolbox from "../components/Toolbox";

export default function AboutPage() {
    return (
        <div className="App">
            <div className="about-banner">
                <div className="about-text">
                    <h2>WHO AM I?</h2>
                    <p>
                        I am a full-stack developer with a passion for creating beautiful and functional web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies. I am a quick learner and a team player, and I am always looking for new challenges.
                    </p>
                </div>
                <div>
                    <div className="slider">
                        <ImageSlider imageUrl="/images/Profil.jpg" timerDuration={800} />
                    </div>

                </div>



            </div>
            <section className="toolbox">
                <h2>
                    MY TOOLBOX
                </h2>
                <p>
                    As a multimedia design graduate and web development student, I possess a wide range of skills.

                </p>
                <Toolbox></Toolbox>
            </section>
            <section className="about-section">
                <img src="/images/Profil.jpg" alt="Freja" />
                <div>
                    <h2>
                        RESPONSIBLE, CREATIVE AND DEDICATED
                    </h2>
                    <p>
                        I am a full-stack developer with a passion for creating beautiful and functional web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies. I am a quick learner and a team player, and I am always looking for new challenges.
                    </p>
                    <button onClick={() => window.open("/images/Profil.jpg", "_blank")} >DOWNLOAD MY PRAICE PROFILE</button>

                </div>
            </section>

            <section className="competences">
                <div>
                    <h2>
                        COMPETENCES
                    </h2>

                </div>
                <div className="competence-list">
                    <div>
                        <h4>Frontend development</h4>
                        <p>
                            As a frontend developer, I possess a strong skill set in creating visually appealing and user-friendly interfaces. With proficiency in HTML, CSS, and JavaScript, I am capable of transforming design concepts into responsive and interactive web applications. My attention to detail, along with a solid understanding of frontend frameworks like React, allows me to build dynamic and engaging user experiences.
                            From responsive design principles to cross-browser compatibility, I bring a comprehensive approach to crafting seamless and aesthetically pleasing frontend solutions.
                        </p>
                    </div>
                    <div>
                        <h4>Backend development</h4>
                        <p>
                            As a backend developer, I bring a robust skill set to the table with a focus on building and maintaining the server-side of web applications. Proficient in database management, I have hands-on experience working with MongoDB and MySQL, enabling me to design and optimize databases for efficient data storage and retrieval. My expertise extends to server-side scripting languages like Node.js and Python, allowing me to develop scalable and secure backend functionalities.  </p>
                    </div>
                    <div>
                        <h4>Graphic design</h4>
                        <p>
                            As a skilled graphic designer, my expertise extends across various facets of visual communication, with a focus on web design and logo creation. Proficient in industry-standard design tools, I have a keen eye for creating visually compelling and user-centric websites. My understanding of design principles, coupled with a creative flair, enables me to craft engaging user interfaces that seamlessly blend aesthetics with functionality. </p>
                    </div>

                </div>
            </section>







        </div>
    );
}