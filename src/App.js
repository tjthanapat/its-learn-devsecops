import React from 'react';
import './style.css';

import Hero from './components/Hero';
import LearningVideo from './components/LearningVideo';

const App = () => {
  return (
    <>
      <Hero />
      <div id="content" className="min-h-screen bg-indigo-100">
        <LearningVideo />
      </div>
      <footer>Learn DevSecOps</footer>
    </>
  );
};

export default App;
