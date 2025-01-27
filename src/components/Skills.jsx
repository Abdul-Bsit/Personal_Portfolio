import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        {
          tooltip: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          tooltip: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          tooltip: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          tooltip: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      items: [
        {
          tooltip: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          tooltip: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          tooltip: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          tooltip: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        {
          tooltip: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          tooltip: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    
    {
      category: "Machine Learning",
      items: [
        {
          tooltip: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          tooltip: "Scikit-learn",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          tooltip: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          tooltip: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 text-gray-100">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Technologies I work with</p>
      </div>
      <div className="container mx-auto mt-12">
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-10 text-center">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-6">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {skillCategory.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="w-24 h-24 flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-md">
                    <img
                      src={skill.icon}
                      alt={skill.tooltip}
                      className="w-12 h-12"
                    />
                  </div>
                  <p className="text-gray-400 mt-2 group-hover:text-cyan-600">
                    {skill.tooltip}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
