import React from "react";
import "./portfolio.css";

function Portfolio() {
    return (
        <section>
        <h2>Portfolio</h2>
        <div className="portfolio-container">
            <div className="portfolio-item">
                <h3>Grow Zone Tracker</h3>
                <img src="Portfolio-React/src/Images/Grow Zone Tracker.webp" alt="Grow Zone Tracker"/>
                <p>Description of Project 1</p>
            </div>
            <div className="portfolio-item">
                <h3>Mark Down Master</h3>
                <img src="Portfolio-React/src/Images/Mark Down Master.webp" alt="Mark Down Master"/>
                <p>Description of Project 2</p>
            </div>
            <div className="portfolio-item">
                <h3>CLI-Garage</h3>
                <img src="Portfolio-React/src/Images/CLI-Garage.jpg" alt="CLI-Garage "/>
                <p>Description of Project 3</p>
            </div>
            <div className="portfolio-item">
                <h3>WeatherWiz</h3>
                <img src="Portfolio-React/src/Images/WeatherWiz.webp" alt="WeatherWiz"/>
                <p>Description of Project 4</p>
            </div>
            <div className="portfolio-item">
                <h3>Employee Tracker</h3>
                <img src="Portfolio-React/src/Images/Employee Tracker.WEBP" alt="Employee Tracker"/>
                <p>Description of Project 5</p>
            </div>
            <div className="portfolio-item">
                <h3>1st Blog</h3>
                <img src="Portfolio-React/src/Images/Project6.webp" alt="1st Blog"/>
                <p>Description of Project 6</p>
            </div>
        </div>
        </section>

    );
}

export default Portfolio;

