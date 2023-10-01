import React from "react";
import Section from "./common/Section";

import { FaGithub} from "react-icons/fa";


import dashboard from "../assets/dashboard.png";
import facialrecognition from "../assets/facial-recognition.jpg";
import website from "../assets/personalwebsite.png";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image:dashboard,
      title: "Dashboard",
      github: "https://github.com/AtahanKocc/Dashboard",
    },
    {
      id: 2,
      image: facialrecognition,
      title: "Facial Recognition",
      github: "https://github.com/AtahanKocc/Emotion-Recognition-For-AI-Assisted-Student-Counseling-",
    },
    {
      id: 3,
      image: website,
      title: "Personal Website",
      github: "https://github.com/AtahanKocc/Personal-Site",
    },

  ];
  return (
    <Section
      title="Portfolio 📝"
      subtitle="These are all projects I've completed. 
      I've worked for some of them before I had any experience."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
          key={id}
          className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>
                {title}
                </h2>
              <a className="text-2xl cursor-pointer duration-150 hover:scale-110"
              href={github}
               target="_black" 
               rel="noopener noreferrer">
                <FaGithub />
                </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;