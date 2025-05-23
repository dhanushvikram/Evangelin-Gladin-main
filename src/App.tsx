import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Results from './pages/Results';
import Contact from './pages/Contact';
import './styles/style.css';
import './components/custom/CustomButton/styles.module.css';
import './components/custom/Image/styles.module.css';
import FooterTest from './components/Footer';
import ContactSection from './components/connection/Connect';
import QuizPopup from './components/QuizApp';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <QuizPopup />
        <ContactSection />
        <FooterTest />
      </div>

    </Router>

  );
}

export default App; 