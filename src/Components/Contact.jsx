import { motion as Motion } from 'framer-motion';
import ContactForm from './ContactForm';
import Footer from './Footer';

const Contact = ({ socialIcons }) => {

  return (
    <>
        <section id='contact' className='px-7 py-12 md:py-24 flex flex-col gap-8 md:gap-14 w-full relative'>
            <div className='max-w-6xl mx-auto w-full space-y-10 lg:space-y-12 z-10'>
                {/* HEADING */}
                <Motion.div  
                    className='flex items-center gap-2'
                    initial={{opacity:0, x:70}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, ease:'easeInOut'}}
                >
                    <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
                    <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent uppercase'>Get in touch</h2>
                    <span className='h-0.5 w-4 md:w-6 bg-gray-100 to-blue-500 rounded-full'></span>
                </Motion.div>
                
                {/* CONTENT */}
                <Motion.div  
                    className='grid lg:grid-cols-2 items-start gap-16'
                    initial={{opacity:0, x:70}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, ease:'easeInOut'}}
                >
                    {/* LEFT SIDE */}
                    <div className='space-y-8 md:w-3/4'>
                        <h3 className='uppercase bg-gradient-to-br from-pink-500 to-blue-500 bg-clip-text text-transparent text-xl md:text-2xl font-[Poppins]'>Do you have a project to discuss?</h3>
                    
                        <div className='flex justify-between flex-col md:flex-row gap-10'>
                            {/* EMAIL ADDRESS */}
                            <div className='space-y-4'>
                                <p className='md:text-lg'>CONTACT</p>
                                {socialIcons
                                    .filter(social => social.id === 'Email')
                                    .map(email => (
                                    <a key={email.id} href={email.href} className='text-blue-400 hover:underline hover:opacity-80'>
                                        {email.text}
                                    </a>
                                ))}
                            </div>
                            
                            {/* SOCIAL MEDIAS */}
                            <div className='space-y-4'>
                                <p className='uppercase md:text-lg'>Find me on</p>
                                <div className='flex gap-4 '>
                                    {socialIcons.filter(social => social.id !== 'Email').map(socials => (
                                        <a
                                            key={socials.id}
                                            href={socials.href}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className={`p-1 text-gray-300 hover:opacity-80 text-lg` + ' ' + (socials.style ? socials.style : '')}
                                        >
                                            {socials.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* RIGHT SIDE */}
                    <div className='space-y-8 lg:space-y-16'>
                        <h2 className='uppercase text-xl text-gray-200 font-[Poppins]'>Contact Form</h2>
                        <ContactForm />
                    </div>
                </Motion.div>
                
                
            </div>
        
            <span className='bg-blue-500/15 w-70 h-70  md:w-100 md:h-100 rounded-full absolute left-0 bottom-0 blur-[200px]'></span>
            <span className='bg-purple-500/15 w-70 h-70 md:w-100 md:h-100 rounded-full absolute left-0 bottom-0 blur-[200px]'></span>
        </section>
        
        <Footer />
    </>
  )
}

export default Contact;