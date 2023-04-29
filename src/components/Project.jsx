import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "TvShows Movies",
      desc: "ReactJS, React-Hooks, Redux-Tookit, SCSS, TMDB-API.",
      //  I have created carousel section, details banner section,fully responsive design, error handling for images, loading skeleton, lazy loading for images, search, filter, sort functionality and others sections.", 
      github_link: "https://github.com/abhishek-25singh/tvshows_movies",
      live_link: "https://asmoviestvshows.netlify.app/",
    },
    {
      img: project2,
      name: "Reminder app",
      desc: "NextJS, Hooks, Firebase-Auth, Firebase-Database, Tailwind-CSS.",
      //  I have created signup, signin, signout, signin with google, add reminder with datetime, delete and completed reminder functionality.",
      github_link: "https://github.com/abhishek-25singh/reminder_app_with_firebase",
      live_link: "https://asreminder.netlify.app/login",
    },
    {
      img: project3,
      name: "Calculator",
      desc: "ReactJS, React-Hooks.",
      //  I have created to perform all arithmetic operations, I have made attractive and responsive design",
      github_link: "https://github.com/abhishek-25singh/calculator",
      live_link: "https://ascalculator.netlify.app/",
    },
    {
      img: project4,
      name: "Todo Lists",
      desc: "ReactJS, React-Hooks, Local-Storage.", 
      // I have created to perform all crud operations. I can mark the item as completed and storing all the data in local storge ",
      github_link: "https://github.com/abhishek-25singh/todo-lists",
      live_link: "https://astodolist.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-yellow-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <div className="mt-16 flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="w-full p-4 bg-gray-800 xl:px-6 h-auto xl:py-8 rounded-lg shadow-shadowOne flex flex-col group transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <a href={project.live_link} target="_blank">
        <img
          className="w-full h-40 object-cover group-hover:scale-105 duration-300 cursor-pointer"
          src={project.img}
          alt="src"
        />
        </a>
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-bold group-hover:text-yellow-600">
              {project.name}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-yellow-600 inline-flex justify-center items-center text-white hover:bg-yellow-700 duration-300 cursor-pointer">
                <a href={project.github_link} target="_blank"><BsGithub /></a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-yellow-600 inline-flex justify-center items-center text-white hover:bg-yellow-700 duration-300 cursor-pointer">
                <a href={project.live_link} target="_blank"><FaGlobe /></a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-gray-300 group-hover:text-white duration-300">
            {project.desc}
          </p>
        </div>
      </div>
    </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
<br />
      

    </section>
  );
};

export default Project;