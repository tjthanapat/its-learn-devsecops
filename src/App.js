import React from 'react';
import './style.css';

import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Hero />
      <div id="content" className="min-h-screen bg-indigo-100">
        <div className=" max-w-screen-lg mx-auto p-5">
          <div className="yt-wrapper">
            <iframe
              src="https://www.youtube.com/embed/nrhxNNH5lt0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
      <footer>Learn DevSecOps</footer>
    </>
  );
};

export default App;
