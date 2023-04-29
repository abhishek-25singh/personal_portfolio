import React from "react";
import hireMe from "../assets/images/avatar.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-yellow-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work ?</p>
      </div>
      <div className="bg-gray-800 relative px-8 overflow-hidden rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[26rem] mt-16 flex gap-6 lg:flex-row flex-col-reverse items-center group">
        <div>
          <h2 className="text-2xl text-gray-100 font-semibold group-hover:text-yellow-600">
            Do you want any work from me ?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-300 leading-6 group-hover:text-white">
            I have good experience and created many projects. You can check projects with github and demo url. You can give a assesment or task to check my skills. Kindly let me know regarding next step.
          </p>
          <button className="btn-primary mt-10 hover:bg-yellow-700"><a href="tel:+918120797371">Say Hello</a></button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[30rem] h-80 lg:absolute bottom-0 -right-3 object-cover group-hover:scale-105 duration-300"
        />
      </div>
    </section>
  );
};

export default Hireme;
