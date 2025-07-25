import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Production from './components/Production';
import Contracts from './components/Contracts';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Production />
      <Contracts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;