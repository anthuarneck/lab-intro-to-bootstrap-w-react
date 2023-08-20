import React from "react";
import images from "../images";

const getLocationImageKey = (locationName) => {
    const lowercaseLocation = locationName.toLowerCase().replace(' ', '-');
    return lowercaseLocation;
  };

const Card = ({ location }) => {
    const truncatedContent = location.content.substring(0, 100) + '...';

    const imageKey = getLocationImageKey(location.location)
    
    const matchedImage = images[imageKey]

    
    
    return (
        <div className="card" style={{ width: '23rem' }}>
            <img src={matchedImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{location.title}</h5>
                <p className="card-text">{location.location}</p>
                <p className="card-content">{truncatedContent}</p>
                <a href="#" className="btn btn-warning">Go to post</a>
            </div>
        </div>
    );
}

export default Card;