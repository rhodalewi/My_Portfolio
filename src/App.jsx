import About from "./Components/About";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

import { SiFrontendmentor, SiGmail  } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn, FaWhatsapp   } from 'react-icons/fa6';



function App() {
  const skillSet = [
    { name: "HTML5", icon: "/HTML-icon.svg" },
    { name: "CSS3", icon: "/CSS-icon.svg" },
    { name: "JavaScript", icon: "/Javascript-home-icon.svg" },
    { name: "React", icon: "/React-icon.svg" },
    { name: "Tailwind CSS", icon: "/TailwindCSS-icon.svg" },
    { name: "Git", icon: "/Git-icon.svg" },
    { name: "Github", icon: "/Github_icon.svg" },
    { name: "Figma", icon: "/Figma.svg" },
  ];

  const socialIcons = [
    { id: 'linkedin', icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/rhodalewi', text: 'Linkedin', style:'bg-blue-500  rounded-sm' },
    { id: 'Github', icon: <IoLogoGithub />, href: 'https://github.com/rhodalewi', text: 'Github', style:' bg-gray-50 rounded-full text-gray-900'},
    { id: 'Email', icon: <SiGmail />, href: 'mailto:rhodalewi@gmail.com', text:'rhodalewi@gmail.com', style:'bg-red-500  rounded-full'},
    { id: 'FrontendMentor', icon: <SiFrontendmentor />, href: 'https://www.frontendmentor.io/profile/rhodalewi', text:'Frontend_Mentor/rhodalewi', style:'bg-[#2A6F9E]  rounded-full'},
    { id: 'Whatsapp', icon: <FaWhatsapp  />, href: 'https://wa.me/2348027581287', text: 'Whatsapp', tel: 'tel:+2348027581287', text2: '+234 802 758 1287', style:'bg-green-500  rounded-full'}
  ];

  return (
    <>
      <Hero skillSet={skillSet} />
      <About socialIcons={socialIcons} />
      <Project />
      <Skills skillSet={skillSet} />
      <Contact socialIcons={socialIcons} />
    </>
  )
}

export default App
