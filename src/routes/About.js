import React from 'react';
import './About.css';

function About(props) {

    console.log(props);
    return (
        <div className="about__container">
            <span>
                "About ... "
            </span>
            <span> hello about </span>
        </div>
    );
}

export default About;