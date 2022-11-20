import React from 'react';

const Hero = () => {
  return (
    <header className="hero flex flex-col justify-between min-h-screen w-full bg-indigo-100 bg-gradient-to-b from-indigo-100 via-indigo-100 to-indigo-300">
      <div className="title px-10 pt-32 pb-10 text-center md:text-left w-full max-w-screen-lg mx-auto">
        <h1 className="hidden md:block text-8xl font-semibold text-indigo-500">
          DevSecOps
        </h1>
        <h1 className="md:hidden text-8xl font-semibold text-indigo-500">
          DEV
          <br />
          SEC
          <br />
          OPS
        </h1>
        <p className="text-xl md:text-2xl mt-5">
          เรียนรู้เกี่ยวกับ DevSecOps เบื้องต้น
        </p>
        <div className="mt-10 animate__animated animate__bounce">
          <a
            href="#content"
            className={
              'px-8 py-2 rounded-full ' +
              'border border-indigo-500 bg-indigo-500 hover:bg-indigo-600  ' +
              'transition duration-500 ease select-none ' +
              'font-mitr text-2xl text-white'
            }
          >
            START
          </a>
        </div>
      </div>
      <div className="overflow-hidden flex justify-center">
        <img
          src="assets/devsecops-characters.png"
          alt="DevSecOps Characters"
          className="characters"
        />
      </div>
    </header>
  );
};

export default Hero;
