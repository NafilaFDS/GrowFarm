import React from 'react';
import banner from "../assets/images/banner.jpg"

const HomeBottom = () => {
    return (
        <section className="home-image">
            <img src={banner} alt="banner" />
            <div className="home-image-caption">
                <h1>LET'S CELEBRATE THE JOY OF AGRICULTURE!</h1>
            </div>
        </section>
    )
}

export default HomeBottom