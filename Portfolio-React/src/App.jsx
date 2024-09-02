import { useState } from 'react';
import './App.css';
// Import the AboutMe, Portfolio, Contact, and Resume "pages"
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// Import the Header and Footer components
import Header from './components/Header'; 
import Footer from './Components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
