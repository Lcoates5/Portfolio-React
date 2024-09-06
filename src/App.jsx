import { useState } from 'react';
import './App.css';
// Import the AboutMe, Portfolio, Contact, and Resume "pages" from the pages directory
import AboutMe from "./Pages/AboutMe/aboutMe.jsx"; 
import Portfolio from "./Pages/Portfolio/portfolio.jsx"; 
import Contact from "./Pages/Contact/contact.jsx";
import Resume from "./Pages/Resume/resume.jsx";

// Import the Header and Footer components
import Header from './Components/Header/header.jsx'; 
import Footer from './Components/Footer/footer.jsx';

// The App component is the root component of the application. It renders the Header component and the other components based on the current page state.
function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  function renderPage() {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else if (currentPage === 'Contact') {
      return <Contact />;
    } else if (currentPage === 'Resume') {
      return <Resume />;
    }
  }
  return (
    <div id="container">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
