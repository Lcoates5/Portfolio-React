import { useState } from 'react';
import './header.css';
import PortfolioPic from '../../Images/PortfolioPic.webp';

function Header({ setCurrentPage }) {
    return (
        <header>
            <div>
            <img  src={PortfolioPic} alt="Avatar" id='avatar'/>
            </div>
        <h1>Lauren Coates</h1>
        <nav> 
            <button onClick={() => setCurrentPage('AboutMe')}>About Me</button>
            <button onClick={() => setCurrentPage('Portfolio')}>Portfolio</button>
            <button onClick={() => setCurrentPage('Contact')}>Contact</button>
            <button onClick={() => setCurrentPage('Resume')}>Resume</button>
        </nav>
        </header>
    );
    }

    export default Header;