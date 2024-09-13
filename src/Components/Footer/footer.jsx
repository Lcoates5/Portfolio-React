import "./footer.css";
import footerImg1 from "../../Images/GitHub-Mark-ea2971cee799.png";
import footerImg2 from "../../Images/LI-In-Bug.png";
import footerImg3 from "../../Images/logo-stackoverflow.png";

function Footer() {
  return (
    <footer className="footer">
      <div className='divContainer'>
        <div>
          <a href="https://github.com/Lcoates5">
            <img src={footerImg1} alt="GitHub" />
          </a>
        </div>
        <div className='linkedIn'>
          <a href="https://www.linkedin.com/in/lauren-coates-801957116/">
            <img src={footerImg2} alt="LinkedIn" />
          </a>
        </div>
        <div className='stack'>
          <a href="https://stackoverflow.com/users/27169609/lauren-coates">
            <img src={footerImg3} alt="Stack Overflow" />
          </a>
        </div>
      </div>
      <p>© 2024 Lauren Coates</p>
    </footer>
  );
}

export default Footer;
