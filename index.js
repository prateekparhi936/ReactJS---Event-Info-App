import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.342360959246!2d-118.51785210317932!3d34.01069455948698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cfc4670c17%3A0xc552fab1a532027b!2sDowntown%20Santa%20Monica!5e0!3m2!1sen!2sus!4v1579657091291!5m2!1sen!2sus"
             width="100%"
             height="500px"
             frameBorder="0"
             allowFullScreen></iframe>
             <div className="location_tag">
                <div>Location</div>
             </div>
        </div>
        
    );
};

export default Location;