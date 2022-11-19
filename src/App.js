import React from 'react';
import './style.css';

import Hero from './components/Hero';
import LearningVideo from './components/LearningVideo';
import MainIdea from './components/MainIdea';
import Footer from './components/Footer';
import ShowTools from './components/Tools';
import Process from './components/Process'
import CaseStudies from './components/CaseStudies';

const App = () => {
  return (
    <>
      <Hero />
      <div id="content" className="min-h-screen bg-indigo-100">
        <LearningVideo />
        <MainIdea/>
        <Process />
        <ShowTools />
        <CaseStudies/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
