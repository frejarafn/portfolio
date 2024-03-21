import React, { useState } from 'react';

const PortfolioItem = ({ imageSrc, title, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={link} className={`portfolio-item ${isHovered ? 'hovered' : ''}`}>
            <img
                src={imageSrc}
                alt={title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            {isHovered && <div className="project-title">{title}</div>}
        </a>
    );
};

export default PortfolioItem;
