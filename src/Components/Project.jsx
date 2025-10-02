import { motion as Motion } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState, useEffect } from 'react';

 const projects = [
    {
      title: "REST Countries API",
      description: "Browse country data with light/dark mode toggle.",
      languages: ['React', 'CSS'],
      image: "/Rest-Country-Project.jpg",
      isMultiple: false,
      livelink: 'https://country-explorer-psi-seven.vercel.app/',
      codelink: 'https://github.com/rhodalewi/Country_Explorer',
    },

    {
      title: "Multi-Step Form",
      description: "A sleek 4-step form with validation and progress tracking.",
      languages: ['React', 'TailwindCSS'],
      image: [
        "/MultiStep-form/step-1.jpg",
        "/MultiStep-form/step-2-monthly.jpg",
        "/MultiStep-form/step-2-yearly.jpg",
        "/MultiStep-form/step-3-monthly.jpg",
        "/MultiStep-form/step-3-yearly.jpg",
        "/MultiStep-form/step-4-monthly.jpg",
        "/MultiStep-form/step-4-yearly.jpg",
        "/MultiStep-form/step-5.jpg"
      ],
      isMultiple: true,
      livelink: "https://multi-step-form-xi-kohl.vercel.app/",
      codelink: "https://github.com/rhodalewi/Multi-Step-Form"
    },

    {
      title: "Guessing Game",
      description: "A fun number guessing game with feedback and scoring.",
      languages: ['HTML', 'CSS', 'Javascript'],
      image: "/GuessGame2.png",
      isMultiple: false,
      livelink: 'https://rhodalewi.github.io/Guessing_Game/',
      codelink: 'https://github.com/rhodalewi/Guessing_Game'
    },

    {
      title: "E-Commerce Page",
      description: "A responsive e-commerce product page with interactive features.",
      languages: ['HTML', 'CSS', 'Javascript'],
      image: [
        "/ECommerce-design1.jpg",
        "/ECommerce-design2.jpg"
      ],
      isMultiple: true,
      livelink: "https://rhodalewi.github.io/ECommerce-Product-Page/",
      codelink: "https://github.com/rhodalewi/ECommerce-Product-Page"
    },

    {
      title: "News Homepage",
      description: "A modern news homepage layout with responsive design.",
      languages: ['HTML', 'CSS', 'Javascript'],
      image: "/News-Homepage.jpg",
      isMultiple: false,
      livelink: "https://rhodalewi.github.io/News_Homepage_Main/",
      codelink: "https://github.com/rhodalewi/News_Homepage_Main"
    },

    {
      title: "Mortgage Repayment Calculator",
      description: "A mortgage calculator with dynamic input and real-time results.",
      languages: ['HTML', 'CSS', 'Javascript'],
      image: [
        "/Mortgage-calculator1.jpg",
        "/Mortgage-calculator2.jpg"
      ],
      isMultiple: true,
      livelink: "https://rhodalewi.github.io/Mortgage_Repayment_Calculator/",
      codelink: "https://github.com/rhodalewi/Mortgage_Repayment_Calculator"
    }
]

const Project = () => {
  
const ImageTransition = ({ image }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % image.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [image.length]);

  return (
    <div className='h-52 overflow-hidden'>
      <img
        src={image[imageIndex]}
        alt={projects.title}
        className={`w-full h-full object-fill transition-all duration-1000 ease-in-out group-hover:scale-110 rounded-tl-2xl rounded-tr-2xl brightness-95`}
      />
    </div>
    
  );
};
  
  return (
    <section id='project' className='px-7 py-12 md:py-24 border-t border-gray-800 flex flex-col justify-center items-center gap-8 md:gap-14 w-full relative'>
      <span className='bg-blue-500/15 w-70 h-70 md:w-120 md:h-120 rounded-full absolute bottom-4 blur-[200px] '></span>
      <span className='bg-purple-500/15 w-70 h-70 md:w-120 md:h-120 rounded-full absolute bottom-4 blur-[200px] '></span>
      <div className='space-y-10 md:space-y-12 z-10'>
      {/* HEADING */}
        <Motion.div  
          className='flex items-center gap-2'
          initial={{opacity:0, x:70}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, ease:'easeInOut'}}
        >
          <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
          <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent uppercase'>My Projects</h2>
          <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
        </Motion.div>
      
      {/* PROJECT CARDS */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 place-content-center max-w-6xl w-full mx-auto'>
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut'}}
              className='group bg-[#09101A] border border-purple-500 rounded-2xl overflow-hidden transition-all duration-700 shadow-lg hover:shadow-purple-500/30 ease-in-out'
            >
              {project.isMultiple ? (
                <ImageTransition image={project.image} />
              ) : (
                 <div className='overflow-hidden'>
                   <img src={project.image} alt={project.title} className='h-52 w-full object-fill rounded-tl-2xl rounded-tr-2xl group-hover:scale-110  transition-all duration-1000 ease-in-out brightness-95' />
                 </div>
              )}
              
              {/* OTHER INFORMATION */}
              <div className='p-6 space-y-3'>
                <div className='flex justify-center'>
                  <span className='w-8 h-0.5 bg-gray-400 rounded-full'></span>
                </div>

                <h3 className='text-purple-400 text-lg font-semibold'> {project.title} </h3>

                <p className='text-gray-300 text-sm'> {project.description} </p>

              {/* Technologies used, LiveLink and Github */}
                <div className='flex items-center justify-between mt-8'>
                  <ul className='flex items-center gap-1 '>
                    {project.languages.map((lang, index) => (
                      <li key={index} className='bg-blue-500/20 backdrop-blur-3xl rounded-xl py-1 px-3 text-xs'> {lang} </li>
                    ))}
                  </ul>

                  <div className='flex items-center gap-3.5'>
                    <a
                      href={project.livelink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='text-lg cursor-pointer transform hover:opacity-75 hover:scale-110 transition duration-700 ease-in-out'
                    >
                      <FaArrowUpRightFromSquare  />
                    </a>
                   
                    <a
                      href={project.codelink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xl cursor-pointer transform hover:opacity-75 hover:scale-110 transition duration-700 ease-in-out'
                    >
                       <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;