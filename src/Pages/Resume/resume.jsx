import React from "react";
import "./resume.css";

function Resume() {
    // path to the resume file
    const resumeLink = 'Portfolio-React/public/Lauren Coates Resume.pdf';

    return (
        <>
        <div>
            <h2>Resume</h2>
            <p>Click <a href={resumeLink} download>here</a> to download my resume.</p>
        </div>
        <h3> Proficiencies</h3>
        <ul className="proficiencies">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>Git/GitHub</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Web Design</li>
            </ul>
            </>
    
        );
      
}

export default Resume;