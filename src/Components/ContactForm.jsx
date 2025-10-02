import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { motion as Motion } from 'framer-motion';
import { LuSend } from "react-icons/lu";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('Message sent successfully!');
      reset();

      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus("Failed to send message. Please try again.", error);
      setTimeout(() => setStatus(null), 5000);
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0f172a] p-8 rounded-2xl space-y-6 shadow-xl w-full border border-purple-500">
      {status && <Motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        exit={{opacity: 0, y: -10}}
        className={`font-bold text-center ${status === 'Message sent successfully!' ? 'text-green-400' : 'text-red-400'}` }
      >
        {status} 
      </Motion.p>
      }

      <div className="flex flex-col gap-1.5">
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
          className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
        />
        {errors.name && <span className="text-red-400 text-xs sm:text-sm"> {errors.name.message} </span>}
      </div>
      
      <div className="flex flex-col gap-1.5">
        <input
          type="email"
          placeholder="Your Email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
        />
        {errors.email && <span className="text-red-400 text-xs sm:text-sm"> {errors.email.message} </span>}
      </div>

      <div>
        <textarea
          rows='5'
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
          className="resize-none w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
        />
        {errors.message && <span className="text-red-400 text-xs sm:text-sm"> {errors.message.message} </span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 font-semibold rounded-lg py-3 flex items-center justify-center gap-2 transition-all duration-700 ease-linear cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : (
          <span className="flex items-center gap-3 justify-center">
            <LuSend />  Send Message
          </span>
        )}
      </button>
    </form>
  )
}

export default ContactForm;