import { motion as Motion } from "framer-motion";

const About = ({ socialIcons }) => {
    
  return (
    <section id='about' className='px-7 py-12 md:py-24 flex items-center justify-center border-t border-gray-800'>
        <div className="space-y-10 lg:space-y-12">
        {/* HEADING */}
            <Motion.div  
                className='flex items-center gap-2 justify-center'
                initial={{opacity:0, x:70}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, ease:'easeInOut', delay:0.2}}
            >
                <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
                <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent uppercase'>About me</h2>
                <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
            </Motion.div>
       
        {/* ABOUT INFORMATION */}
            <Motion.div 
                className='flex flex-col lg:flex-row items-center max-w-5xl justify-center gap-10 lg:gap-20 text-gray-100 font-[Poppins]'
                initial={{opacity:0, y:90}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease:'easeInOut'}}
            >
                {/* IMAGE */}
                <div className="p-0.5 rounded-full w-32 lg:w-4xl h-auto bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 animate-border">
                    <img src="/Dark_mode_avatar.png" alt="Avatar" className='object-cover rounded-full bg-[#09101A]'/>
                </div>

            {/* PARAGRAPH */}      
                <div className='space-y-3 text-center lg:text-start'>
                    <p className='text-xs md:text-sm leading-relaxed md:leading-loose'> 
                        Hi, I’m <span className="text-purple-400 font-semibold">Rhoda Alewi</span>, a passionate Frontend Developer with a background in Psychology and experience building intuitive, user-friendly applications using modern web technologies. I enjoy turning complex ideas into clean, functional designs.
                    </p>
                    
                    <p className='text-xs md:text-sm leading-relaxed md:leading-loose'>
                        My journey in tech has taught me to blend <span className="text-purple-300">problem-solving</span>, creativity, and detail-oriented thinking. I’m always learning and building projects that challenge me to grow. I believe in the power of clean code, thoughtful design, and continuous learning.
                    </p>
                    
                    <p className='text-xs md:text-sm leading-relaxed md:leading-loose'>
                        I believe in the power of clean code, thoughtful design, and continuous learning. Whether working on complex <span className='text-purple-300'>React</span> applications or crafting pixel-perfect <span className='text-purple-300'>CSS</span> layouts, I bring attention to detail and a user-first mindset to every project. When I’m not coding, I love exploring new tools, reading web technologies articles, and watching volleyball match.
                    </p>
                </div>
                
            {/* SOCIAL LINKS */}
                <div className="flex lg:flex-col gap-4">
                    {socialIcons.map(socials => (
                        <a
                            href={socials.href}
                            key={socials.id}
                            target='_blank'
                            rel="noopener noreferrer"
                            className={'text-base p-2 transform hover:scale-90 transition-transform duration-700 ease-in-out hover:opacity-85' + ' ' + (socials.style ? socials.style : '')}
                        >
                            {socials.icon}
                        </a>
                    ))}
                </div>
            </Motion.div>
        </div>
    </section>
  )
}

export default About;