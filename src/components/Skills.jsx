import React from 'react';
import html from '../assets/html.png';
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import csharp from "../assets/csharp2.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import Angular from "../assets/angular.png";
import Section from "./common/Section";

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML5",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS3",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: csharp,
            title: "C#",
            style: "shadow-white",
        },
        {
            id: 5,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 7,
            src: Angular,
            title: "Angular",
            style: "shadow-red-400",
        },
        {
            id: 8,
            src: python,
            title: "Python",
            style: "shadow-blue-500",
        },
    ];

    return (
        <Section
            title="Skills ⚒️"
            subtitle="These are the technologies I've worked with"
        >
            <div className='grid grid-cols-4 gap-5'>
                {skills.map(({ id, src, title, style }) => (
                    <div
                        key={id}
                        className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'
                    >
                        <img src={src} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain' />
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
