import "./footer.css";
import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className='divContainer'>
        <div>
          <a href="https://github.com/Lcoates5">
            <img src="src/Images/GitHub-Mark-ea2971cee799.png" alt="GitHub" />
          </a>
        </div>
        <div className='linkedIn'>
          <a href="https://www.linkedin.com/in/lauren-coates-801957116/">
            <img src="src/Images/LI-In-Bug.png" alt="LinkedIn" />
          </a>
        </div>
        <div className='stack'>
          <a href="https://stackoverflow.com/users/27169609/lauren-coates">
            <img src="src/Images/logo-stackoverflow.png" alt="Stack Overflow" />
          </a>
        </div>
      </div>
      <p>© 2024 Lauren Coates</p>
    </footer>
  );
}

export default Footer;
