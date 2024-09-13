import "./portfolio.css";
import image1 from "../../Images/GrowZoneTracker.webp";
import image2 from "../../Images/MarkDownMaster.webp";
import image3 from "../../Images/CLI-Garage.jpg";
import image4 from "../../Images/WeatherWiz.webp";
import image5 from "../../Images/EmployeeTracker.WEBP";
import image6 from "../../Images/1stBlog.webp";
function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-item1">
          <a href="https://bbbjrn.github.io/Group03-Project-GrowZoneTracker/">
            <img
              src={image1}
              alt="Grow Zone Tracker"
            />
          </a>
          <h3>Grow Zone Tracker</h3>
          <p>https://github.com/Bbbjrn/Group03-Project-GrowZoneTracker</p>
        </div>
        <div className="portfolio-item2">
          <a href="https://youtu.be/w1uzPKXqlZY">
            <img src={image2} alt="Mark Down Master" />
          </a>
          <h3>Mark Down Master</h3>
          <p>https://github.com/Lcoates5/MarkDownMaster</p>
        </div>
        <div className="portfolio-item3">
          <a href="https://youtu.be/tlj5rVhD_f8">
            <img src={image3} alt="CLI-Garage " />
          </a>
          <h3>CLI-Garage</h3>
          <p>https://github.com/Lcoates5/CLI-Garage</p>
        </div>
        <div className="portfolio-item4">
          <a href="https://github.com/Lcoates5">
            <img src={image4} alt="WeatherWiz" />
          </a>
          <h3>WeatherWiz</h3>
          <p>https://github.com/Lcoates5/WeatherWiz</p>
        </div>
        <div className="portfolio-item5">
          <a href="https://youtu.be/YZLR6_7IeZw">
            <img src={image5} alt="Employee Tracker" />
          </a>
          <h3>Work-Log</h3>
          <p>https://github.com/Lcoates5/Work-log</p>
        </div>
        <div className="portfolio-item6">
          <a href="https://github.com/Lcoates5">
            <img src={image6} alt="1st Blog" />
          </a>
          <h3>1st Blog</h3>
          <p>https://github.com/Lcoates5/1stBlog</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
