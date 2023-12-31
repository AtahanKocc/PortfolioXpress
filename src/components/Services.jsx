import React from 'react'
import Section from "./common/Section"

//import commerce from "../assets/commerce.png";
// import web from "../assets/web.png";
// import mobile from "../assets/mobile.png";
import commerce from "../assets/shopping.png";
import mobile from "../assets/development.png";
import design from "../assets/ux-design.png";
import web from "../assets/coding.png";

const Services = () => {

    const services = [
        {
            id:1,
            image:commerce,
            title:"Ecommerce Website",
        },
        {
            id:2,
            image:web,
            title:"Web developer",
        },
        {
            id:3,
            image:mobile,
            title:"Mobile Developer",
        },
        {
            id:4,
            image:design,
            title:"UI/UX Designer",
        },
    ];

  return (
    <Section title="Services ⚒️" subtitle="Here is a list of every service I offer to my customers. Please email me if you are unable to find what you are looking for. I am always happy to help."
    >

        <div className='grid gap-10 lg:grid-cols-2'>
            {services.map(({id, image, title}) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110
                '
                >
                    <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain' />
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>
            ))}
        </div>

    </Section>
  )
}

export default Services