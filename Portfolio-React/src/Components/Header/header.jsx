import './Header.css';

function Header(setCurrentPage) {
    return (
        <header>
        <h1>Lauren Coates</h1>
        <nav> 
            <button onClick={() => setCurrentPage('About Me')}>About Me</button>
            <button onClick={() => setCurrentPage('Portfolio')}>Portfolio</button>
            <button onClick={() => setCurrentPage('Contact')}>Contact</button>
            <button onClick={() => setCurrentPage('Resume')}>Resume</button>
        </nav>
        </header>
    );
    }