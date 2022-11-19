import React from 'react';
import './style.css';

import Hero from './components/Hero';
import LearningVideo from './components/LearningVideo';
import MainIdea from './components/MainIdea';
import Footer from './components/Footer';
import ShowTools from './components/Tools';
import Process from './components/Process'
import CaseStudies from './components/CaseStudies';
import DevSecOpsQuiz from './components/Quiz';

const App = () => {
  return (
    <>
      <Hero />
      <div id="content" className="bg-indigo-100">
        <LearningVideo />
        <MainIdea/>
        <Process />
        <ShowTools />
        <CaseStudies/>
      <DevSecOpsQuiz/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
