import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from 'react-icons/fa';
import avatar from '../assets/avatar.png';



const Hero = () => {
    const SOCIAL = [
     {   
        id:1,
        link: "https://twitter.com/AtahanKoc",
        icons: <FaTwitter />,
     },
     {   
        id:2,
        link: "https://www.facebook.com/",
        icons: <FaFacebook />,
     },

     {   
        id:3,
        link: "https://www.linkedin.com/in/atahankoc/",
        icons: <FaLinkedin />,
     },

    ];
 
    return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold'>Atahan Koc</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>  
        Hi! I'm Atahan. I am a graduate of Computer Engineering from Istanbul Medipol University. 
        Currently working as a Software Engineer at Geovision Group 
        </p>
    </section>
  )
}

export default Hero;