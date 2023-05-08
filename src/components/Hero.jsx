import React from "react";
import hero from "../assets/images/hero.png";

import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si';
import { RiUserLocationFill } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';  

import Typed from 'react-typed';

const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-yellow-600 md:text-6xl text-5xl">
              Hi!
              <br />
            </span>
            I am Abhishek Singh
          </h1>
          <Typed
            className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-yellow-600'
            strings={['Frontend Developer', 'ReactJS Developer', 'Software Engineer']}
            typeSpeed={90}
            backSpeed={100}
            loop
          />
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, i) => (
              <div
                key={i}
                className="text-gray-500 hover:text-yellow-600 cursor-pointer "
              >
                <a href={icon?.link} target="_blank">{icon?.name}</a>
              </div>
            ))}
          </div>
          <button className="btn-primary mt-8 ml-3 hover:bg-yellow-700"><a href="https://drive.google.com/file/d/18y-Ee9NCSu-Iel1mKYZdgBJnr1mSjWOR/view?usp=sharing" target="_blank">Download CV</a></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

export const social_media = [
  { name: <SiGithub />, link: "https://github.com/abhishek-25singh" },
  { name: <SiLinkedin />, link: "https://www.linkedin.com/in/abhishek-25singh" },
  { name: <RiUserLocationFill />, link: "https://goo.gl/maps/siaJeJcdPKVFnSX76" },
  { name: <MdCall />, link: "tel:+918120797371" },
  { name: <SiWhatsapp />, link: "https://wa.me/+918120797371" },
];