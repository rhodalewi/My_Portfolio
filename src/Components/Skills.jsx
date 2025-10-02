import { motion as Motion } from 'framer-motion';

const Skills = ({ skillSet }) => {
  return (
    <section id='skills' className='px-7 py-12 md:py-24 border-t border-gray-800 flex w-full border '>
      <div className='max-w-6xl mx-auto w-full space-y-10 lg:space-y-12'>
        {/* HEADING */}
        <Motion.div  
          className='flex items-center gap-2'
          initial={{opacity:0, x:70}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, ease:'easeInOut'}}
        >
          <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
          <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent uppercase'>Skills</h2>
          <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
        </Motion.div>
          
        <p className='md:text-xl font-normal font-[Poppins] text-center'>The skills, tools and technologies i use:</p>

        {/* SKILL LIST */}
        <Motion.div
          className=' max-w-md md:max-w-xl mx-auto flex flex-wrap justify-center items-center gap-x-1 gap-y-6 md:gap-y-10 md:gap-x-2'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {skillSet.map((skill, index) => {
            const icon = skill.name === 'JavaScript' ? '/Javascript-icon.svg' : skill.icon;
            return (
              <div key={index} className='flex justify-center w-1/4 md:w-1/6'>
                <img src={icon} alt={skill.name} className='object-cover w-10 md:w-13 h-auto inline-block' />
              </div>
            );
          })}
        </Motion.div>
      </div>
    </section>
  )
};

export default Skills;