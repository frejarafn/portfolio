import { useEffect, useState } from "react";

export default function ImageSlider({ imageUrl, timerDuration, containerClassName, imageClassName }) {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, timerDuration);

        return () => clearTimeout(timer);
    }, [timerDuration]);

    return (
        <div className={`image-container ${containerClassName || ''} ${showImage ? 'fade-in' : ''}`}>
            {showImage && <img src={imageUrl} alt="Your" className={`fade-in ${imageClassName || ''}`} />}
        </div>
    );
};

