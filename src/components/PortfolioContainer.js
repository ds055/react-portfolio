import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/Portfolio.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Checks current page and renders appropriate page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass on state with change state function */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Loads current page */}
      {renderPage()}
      <Footer />
    </div>
  );
}
