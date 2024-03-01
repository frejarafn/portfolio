// MarqueeText.js
import React, { useEffect, useState } from 'react';

const MarqueeText = ({ text }) => {
    const [position, setPosition] = useState(window.innerWidth);

    useEffect(() => {
        const moveText = () => {
            const screenWidth = window.innerWidth;
            const textWidth = document.getElementById('marquee-text').offsetWidth;

            if (position < -textWidth) {
                // Nulstil positionen, når teksten går ud af skærmen
                setPosition(screenWidth);
            } else {
                // Flyt teksten mod venstre
                setPosition(position - 1);
            }
        };

        const intervalId = setInterval(moveText, 10); // Juster efter behov

        return () => {
            clearInterval(intervalId);
        };
    }, [position]);

    return (
        <div className="marquee-container">
            <div id="marquee-text" className="marquee-text" style={{ left: `${position}px` }}>
                {text}
            </div>
        </div>
    );
};

export default MarqueeText;
