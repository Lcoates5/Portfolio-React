import "./portfolio.css";

function Portfolio() {
    return (
        <section>
        <h2>Portfolio</h2>
        <div className="portfolio-container">
            <div className="portfolio-item">
                <h3>Project 1</h3>
                <img src="Portfolio-React/src/Images/Project1.webp" alt="Project 1"/>
                <p>Description of Project 1</p>
            </div>
            <div className="portfolio-item">
                <h3>Project 2</h3>
                <img src="Portfolio-React/src/Images/Project2.webp" alt="Project 2"/>
                <p>Description of Project 2</p>
            </div>
            <div className="portfolio-item">
                <h3>Project 3</h3>
                <img src="Portfolio-React/src/Images/Project3.webp" alt="Project 3"/>
                <p>Description of Project 3</p>
            </div>
            <div className="portfolio-item">
                <h3>Project 4</h3>
                <img src="Portfolio-React/src/Images/Project4.webp" alt="Project 4"/>
                <p>Description of Project 4</p>
            </div>
            <div className="portfolio-item">
                <h3>Project 5</h3>
                <img src="Portfolio-React/src/Images/Project5.webp" alt="Project 4"/>
                <p>Description of Project 5</p>
            </div>
            <div className="portfolio-item">
                <h3>Project 6</h3>
                <img src="Portfolio-React/src/Images/Project6.webp" alt="Project 4"/>
                <p>Description of Project 6</p>
            </div>
        </div>
        </section>

    );
}

export default Portfolio;

