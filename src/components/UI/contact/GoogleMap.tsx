import React from 'react';

const GoogleMap: React.FC = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7162.32848732331!2d101.68160497829311!3d3.180489404388412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smy!4v1734794749459!5m2!1sen!2smy"
                width="100%"
                height="500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
