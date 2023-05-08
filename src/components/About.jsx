import React from "react";

const About = () => {
 
  const experience = [
    {
      designation: "Software Engineer",
      company: "Paytm, Noida UP",
      date: " - April 2022",
      desc: "ReactJS, Linux, Mysql",
      currently: "Present",
    },
    {
      designation: "Software Developer Intern.",
      company: "Digimonk Technologies, Gwalior MP",
      date: " - September 2021",
      desc: "Python, Django, ReactJS",
    },
    {
      designation: "Network Engineer",
      company: "ITCONS e-Solutions, Noida UP",
      date: " - January 2021",
      desc: "",
    },
  ];
  const education = [
    {
      course: "B.E. in Computer Science",
      institute: "IEJU, Gwalior MP",
      date: " - 2020",
      // desc: "ReactJS, Linux, Mysql",
      grade: "71.6%",
    },
    {
      course: "12th in Maths",
      institute: "Sunrise Public H.S.School, Gwalior MP",
      date: " - 2016",
      // desc: "ReactJS, Linux, Mysql",
      grade: "57.6%",
    },
    {
      course: "10th",
      institute: "Asha H.S.School, Gwalior MP",
      date: " - 2014",
      // desc: "ReactJS, Linux, Mysql",
      grade: "70%",
    },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8">
        <h3 className="text-4xl font-semibold text-center">
          About <span className="text-yellow-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg text-center">My introduction</p>
        <div className="mt-10 flex md:flex-row flex-col-reverse justify-center items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="py-6 lgl:py-12 flex flex-col gap-4">
              <p className="text-gray-100 text-sm tracking-[4px]">
                2021 - 2023
              </p>
              <h2 className="text-gray-200 text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              {/* <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            // result="USA"
            desc="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}
              {experience?.map((exp, i) => (
                <ResumeCard
                  designation={exp.designation}
                  company={exp.company}
                  date={exp.date}
                  currently={exp.currently}
                  desc={exp.desc}
                />
              ))}
            </div>
          </div>

          {/* <div className="flex-1 md:mt-0 mt-6 justify-center items-center">
          
          </div>
           */}

          <div>
            <div className="py-6 lgl:py-12 flex flex-col gap-4">
              <p className="text-gray-100 text-sm tracking-[4px]">2014 - 2020</p>
              <h2 className="text-gray-200 text-3xl md:text-4xl font-bold">
                Education Quality
              </h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              {education?.map((edu, i) => (
                <ResumeCard
                  designation={edu.course}
                  company={edu.institute}
                  date={edu.date}
                  currently={edu.grade}
                  desc={edu.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const ResumeCard = ({ designation, company, date, currently, desc }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-yellow-500">
          <span className="w-3 h-3 rounded-full inline-flex group-hover:bg-yellow-700 duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gray-800 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-gray-100 text-xl md:text-2xl font-semibold group-hover:text-yellow-600 duration-300">
              {designation}
            </h3>
            <p className="text-sm mt-2 text-gray-300 group-hover:text-white duration-300 justify-between">
              {company} {date}
              {currently ? (
                <span className="px-2 py-1 m-1 bg-gray-900 rounded-lg shadow-shadowOne text-sm font-medium group-hover:text-yellow-600">
                  {currently}
                </span>
              ) : (
                ""
              )}
            </p>
            {/* <p className="py-2 bg-black bg-opacity-25 rounded-lg flex justify-center   text-sm font-medium">
              {result}
            </p> */}
          </div>
          <div>
            {/* <p className="py-2 bg-black bg-opacity-25 rounded-lg flex justify-center   text-sm font-medium">
              {result}
            </p> */}
          </div>
        </div>
        {/* {desc ? <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">{desc}</p> : "" } */}
      </div>
    </div>
  );
};
