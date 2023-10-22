import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from 'react-icons/fa';
import avatar2 from '../assets/avatar2.png';



const Hero = () => {
    const SOCIAL = [
     {   
        id:1,
        link: "https://twitter.com/AtahanKoc",
        icon: <FaTwitter />,
     },
     {   
        id:2,
        link: "https://www.facebook.com/",
        icon: <FaFacebook />,
     },

     {   
        id:3,
        link: "https://www.linkedin.com/in/atahankoc/",
        icon: <FaLinkedin />,
     },

    ];
 
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if (this.scrollY >=90) downArrow.classList.add('hide-down-arrow');
         else downArrow.classList.remove('hide-down-arrow');
      });

    return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold'>Atahan Koc</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>  
        Hi! I'm Atahan. I am a graduate of Computer Engineering from Istanbul Medipol University. 
        I am currently working as a Software Engineer.
        </p>

        {/* Social Icons */}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
         {SOCIAL.map(({id, link, icon}) => (
              <a 
              href={link} 
              key={id}
              target='_blank'
              rel= 'noopener noreferrer'  // pencerenin güvenliği ile ilgili önlemler almak için kullanılır
              className='cursor-pointer duration-600 hover:text-rose-500'
              >
               {icon}
              </a>  
         ))}
         </div>

         {/*avatar and resume*/}

         <div>
            <img src={avatar2} alt='avatar' 
            className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b
           '/>
            <a href="/AtahanKoc_Cv.pdf" download={true} className="flex items-center
            justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg">Resume</a>
         </div>

      <div className='mt-10 down-arrow'>
         <FaArrowDown className='text-rose-500 text-3xl animate-bounce mt-10'/>
      </div>
    </section>
  );
};

export default Hero;