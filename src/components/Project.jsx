import React, { useState, useEffect } from "react";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTensorflow, SiTailwindcss } from "react-icons/si";

import project from "../assets/images/Sentiment Analysis.png";
import project1 from "../assets/images/News.png";
import project2 from "../assets/images/MRI.png";
import project3 from "../assets/images/drug.png";
import project4 from "../assets/images/Text.png";


const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const projects = [
    {
      img: project,
      name: "Sentiment Analysis",
      description: "Analyze sentiment in text using machine learning.",
      github_link: "https://github.com/oge-dev/Simple-calculator",
      live_link: "https://oge-dev.github.io/Simple-calculator/",
      technologies: [<FaPython />, <SiTensorflow />, <FaHtml5 />],
    },
    {
      img: project1,
      name: "News Classification",
      description: "Classify news articles using a fine-tuned BERT model.",
      github_link: "https://github.com/oge-dev/Simple-calculator",
      live_link: "https://oge-dev.github.io/Simple-calculator/",
      technologies: [<FaPython />, <SiTensorflow />, <FaHtml5 />],
    },
    {
      img: project2,
      name: "MRI Image Analysis",
      description: "Analyze MRI images for medical insights.",
      github_link: "https://github.com/oge-dev/Simple-calculator",
      live_link: "https://oge-dev.github.io/Simple-calculator/",
      technologies: [<FaReact />, <SiTailwindcss />, <FaPython />],
    },
    {
      img: project3,
      name: "Drug Repurposing Platform",
      description: "An AI-powered platform leveraging machine learning to identify new therapeutic applications for existing drugs. It uses features like disease-drug relationships, biomedical literature analysis, and validation experiments.",
      github_link: "https://github.com/oge-dev/Simple-calculator",
      live_link: "https://oge-dev.github.io/Simple-calculator/",
      technologies: [<FaPython />, <SiTensorflow />,<FaHtml5 />],
    },
    {
      img: project4,
      name: "Text and Voice Emotion Recognition",
      description: "A machine learning project that detects emotions from both text and voice inputs. It uses NLP for text emotion recognition and signal processing techniques for voice-based emotion detection.",
      github_link: "https://github.com/oge-dev/Simple-calculator",
      live_link: "https://oge-dev.github.io/Simple-calculator/",
      technologies: [<FaPython />, <SiTensorflow />,<FaHtml5 />],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className={`py-10 text-white ${isVisible ? "fade-in" : ""}`}
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <div className="mt-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project_info, i) => (
            <div
              key={i}
              className="h-fit bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="overflow-hidden rounded-t-xl relative group"
                onClick={() => setFullscreenImage(project_info.img)}
              >
                <img
                  src={project_info.img}
                  alt={project_info.name}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project_info.name}</h3>
                <p className="text-gray-300 my-2">{project_info.description}</p>

                {/* Technology Icons */}
                <div className="flex gap-2 mt-3 text-cyan-600 text-xl">
                  {project_info.technologies.map((icon, index) => (
                    <span key={index} className="hover:text-white">
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Github
                  </a>
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="text-cyan-600 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            See More
          </button>
        </div>
      )}

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen View"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-5 right-5 text-white text-2xl bg-gray-800 rounded-full p-2"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
