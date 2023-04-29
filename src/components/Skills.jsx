import React from "react";


import { GrMysql, GrReactjs } from 'react-icons/gr';  
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiGithub, SiLinux, SiPython } from 'react-icons/si';  
// import { GrMysql, GrReactjs } from 'react-icons/gr';  

const Skills = () => {
  const skills = [
    {
      logo: <SiHtml5 />,
      level: "HTML5",
      count: 91,
    },
    {
      logo: <SiCss3 />,
      level: "CSS3",
      count: 82,
    },
    {
      logo: <SiJavascript />,
      level: "Javascript",
      count: 82,
    },
    {
      logo: <SiReact />,
      level: "ReactJS",
      count: 91,
    },
    {
      logo: <SiRedux />,
      level: "Redux",
      count: 82,
    },
    {
      logo: <SiGithub />,
      level: "Github",
      count: 82,
    },
    {
      logo: <SiPython />,
      level: "Python",
      count: 82,
    },
    {
      logo: <SiLinux />,
      level: "Linux",
      count: 82,
    },
    {
      logo: <GrMysql />,
      level: "MySQL",
      count: 82,
    },
  ];
  return (
    <section id="skills" className="py-10 px-3 text-white">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-yellow-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-8 px-1 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative min-w-[10rem] max-w-[16rem] p-8 group"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(202, 138, 4) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-yellow-600">
                  {skill.logo}
                  
                </div>
              </div>
              <p className="text-xl mt-3 text-gray-300 group-hover:text-white">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
