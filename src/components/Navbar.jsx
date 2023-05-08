import React, { useEffect, useState } from "react";

import { RiMenu5Line, RiCloseLine } from 'react-icons/ri'; 
import { SiGmail } from 'react-icons/si';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "HIRE", link: "#hireme" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-black/60  text-white-900" : "text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase text-white font-bold duration-300   hover:text-yellow-700">
          <a href="#home">{"<"}<span className="text-yellow-600">{"/"}</span>{">"}</a>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-white-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-yellow-700">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-white-900 cursor-pointer text-white hover:text-gray-800" : "text-white-100 text-white cursor-pointer hover:text-yellow-700"
          } text-3xl md:hidden m-5`}
        >
          {open ? <RiCloseLine /> : <RiMenu5Line />}
        </div>
        <div
          className={`md:hidden text-white-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-yellow-600 top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-gray-800 text-white"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open ? <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl border bg-yellow-600 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-800">
      <a href="mailto:abhisheksinghparihar1998@gmail.com"><SiGmail /></a>
    </div> : <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-yellow-600 w-16 h-16 flex items-center justify-center rounded-full hover:bg-yellow-700">
      <a href="mailto:abhisheksinghparihar1998@gmail.com"><SiGmail /></a>
    </div>}
    </nav>
  );
};

export default Navbar;
