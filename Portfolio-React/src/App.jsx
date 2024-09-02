import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header'; 

// The App component is the root component of the application. It renders the Header component and the other components based on the current page state.
function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  function renderPage() {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else if (currentPage === 'Contact') {
      return <Contact />;
    } else {
      return <Resume />;
    }
  }
  return (
    <div id="container">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <footer></footer>
    </div>
  );
}

export default App;
