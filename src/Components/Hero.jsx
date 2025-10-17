import { motion as Motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Header from './Header'
import { FaAnglesDown } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { BiSolidRightArrowAlt } from "react-icons/bi";


const Hero = ({skillSet}) => {
  return (
    <>
      <Header />

      <section id='home' className='relative p-7 h-full bg-[url(/Mobile_Hero_Background.png)] bg-cover bg-center bg-no-repeat bg-blend-multiply lg:h-screen md:bg-[url(/Desktop-Hero-Background.png)] flex flex-col items-center text-center md:text-start pt-28 lg:pt-40'>
      {/* MAIN CONTENT */}
        <Motion.div
          className='space-y-2 md:space-y-4 mb-20'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{duration:0.8, ease:'easeInOut'}}
        >
          <p className='text-gray-200 text-sm md:text-base'>Hi, my name is</p>
          <h1 className='text-4xl md:text-6xl bg-gradient-to-r from-purple-500  to-blue-500 bg-clip-text text-transparent font-bold'>Rhoda Alewi.</h1>
          <p className='text-gray-300 max-w-lg mt-6 text-xs md:text-base'>I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive web applications.</p>

          <div className="inline-flex flex-col sm:flex-row justify-center md:items-center gap-5 md:gap-7 font-[Poppins] mt-4">
            <a
              href="/Alewi-Rhoda-Frontend-Developer-Resume.pdf" download
              className="overflow-hidden group rounded-lg text-sm md:text-base font-medium flex items-center justify-center gap-2 p-2 md:py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-700 ease-linear w-36 md:w-46 active:bg-none active:border active:border-purple-500"
            >
              <FiDownload className="hidden translate-x-[-50px] group-hover:block group-hover:translate-x-0 transition-all duration-700 ease-in-out" />
              Download CV
            </a> 

            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-2.5 rounded-lg font-medium border border-purple-500 hover:bg-purple-500/10 transition duration-300 text-sm md:text-base"
            >
              Contact Me
              <BiSolidRightArrowAlt className="scale-150" />
            </a> 
        </div>
        </Motion.div>  

      {/* INFINTE SCROLL OF TECHNOLOGIES USED */}
        <div className="container font-[Poppins] overflow-hidden whitespace-nowrap lg:absolute bottom-14 max-w-7xl">
          <div className=" flex flex-nowrap justify-between shrink-0 items-center gap-3 md:gap-6 animate-[scrollTech_6s_linear_infinite] hover:animate-none">
            {[...skillSet, ...skillSet].map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 rounded-full bg-[#0f172a]/80 backdrop-blur-md px-6 py-1.5 shadow-lg"
              >
                <img src={skill.icon} alt={skill.name} className="object-cover" />
                <p className="text-xs/5 md:text-sm/5 text-slate-200"> {skill.name} </p>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="project"
          spy={true}
          smooth={true}
          duration={1000}
          className="absolute bottom-6 cursor-pointer"
        >
          <FaAnglesDown className="text-xl animate-bounce text-gray-100 dark:hover:text-blue-500" />
        </Link>
      </section>
    </>
    
  )
}

export default Hero