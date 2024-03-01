import ImageSlider from "../components/ImageSlider";

export default function HomePage() {
    return (
        <div>
            <div className="hi-there">
                <div className="hi-text">
                    <h1>HI THERE!</h1>
                    <h2>I'm Freja van Gilst</h2>
                    <p>My name is Freja van Gilst, and I am 24 years old. I am a  multimedia design graduate and I am currently studying web development at Business Academy Aarhus. I love coding and coming up with new creative solutions that can add value to businesses and individuals. I am motivated by the desire to create excellent web experiences and, at the same time, I become wiser and more experienced every day. </p>
                    <button>MY CV</button>
                    <button>
                        <a href="https://www.linkedin.com/in/freja-van-gilst">LINKEDIN</a>
                    </button>
                </div >
                <div className="hero-image">
                    <ImageSlider imageUrl="/images/full-profile.png" timerDuration={1000} />

                </div>
            </div>

        </div >
    );
}