import React from 'react';
import Navbar from './components/Navbar.jsx'; // Assuming you have a Navbar component
import Home from './pages/Home.jsx'; // Assuming you have a Home component
import About from './pages/About.jsx'; // Assuming you have an About component
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx'; // Assuming you have a Projects component
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx'; // Assuming you have a Contact component
import Footer from './components/Footer.jsx'; // Assuming you have a Footer component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;