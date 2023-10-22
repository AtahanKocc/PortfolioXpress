import React from 'react'
import Section from "./common/Section"
import {FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from 'react-icons/fa';
import contact from '../assets/development.png'


const Contact = () => {
 
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
    }
   ];
 
 
 
    return (
    <Section title="Contact 📞" 
    subtitle="If you have any questions or would like to work together, please feel free to contact me.">     
    
    <div>
        <div><img src={contact} alt=''></img></div>
        <div>
            <p>
                I'm open to talk regarding freelancing or full-time opportunities.
            </p>
        </div>
        <div>
            {SOCIAL.map(({id, link, icon}) => ( 
               <a href="">{icon}</a>
            ))}
        </div>
    </div>
   
   
    </Section>
  )
}

export default Contact