import React, { useState } from "react";
import aboutImg from "../assets/images/p.png";
import CV from "../assets/CV ABDUL BASIT.pdf";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text-justify leading-7 md:w-11/12 w-full mx-auto">
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="text-cyan-600 cursor-pointer">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const About = () => {
  const info = [
    { text: "Years Experience", count: "02" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "02" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About<span className="text-cyan-600"> Me</span>
        </h3>
 <br />
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <ReadMore>
              I am an AI and machine learning specialist dedicated to creating innovative, functional, and user-friendly solutions. With a deep passion for applying cutting-edge technology, I focus on building models and systems that solve real-world challenges in fields like computer vision, natural language processing, and automation. My goal is to bridge advanced AI research with practical applications, ensuring that solutions are both impactful and accessible. I am constantly exploring new tools, frameworks, and techniques to drive efficiency and deliver meaningful outcomes in digital transformation projects.
              </ReadMore>
              
              <br />
              <br />
              <a href={CV} download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
