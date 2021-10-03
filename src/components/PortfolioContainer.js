import React, { useState } from "react";
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume'
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Project />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
      <Footer />
    </div>
  )
}