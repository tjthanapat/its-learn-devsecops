import React from 'react';
import characterDev from './../assets/character-dev.svg';
import characterSec from './../assets/character-sec.svg';
import characterOps from './../assets/character-ops.svg';

const Hero = () => {
  return (
    <>
      <header className="hero flex flex-col justify-between min-h-screen w-full bg-indigo-100">
        <div className="title text-center px-5 pt-36 pb-8">
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
          <p className="text-2xl text-center mt-5">
            แนวคิดการเพิ่มส่วนของ Security ให้ DevOps
          </p>
          <div className="flex justify-center mt-10 animate__animated animate__jello">
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
        <div className="overflow-hidden">
          <img
            src="/assets/devsecops-characters.png"
            alt="DevSecOps Characters"
            className="characters mx-auto"
          />
        </div>
      </header>
      <div className="hero-shadow z-20"></div>
    </>
  );
};

export default Hero;
