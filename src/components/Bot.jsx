import React from "react";

import { IoMdCall } from 'react-icons/io';
import { MdOutlineCall, MdCall } from 'react-icons/md';

const Bot = () => {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-yellow-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce hover:bg-yellow-700">
      <a href="tel:+918120797371"><MdCall /></a>
    </div>
  );
};

export default Bot;
