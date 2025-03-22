import { motion } from 'motion/react'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full relative gap-10 flex flex-col justify-center items-center min-h-[90vh] p-5 bg-white'>
      {/* Background Headphone Image */}
      <img 
        className='absolute z-10 opacity-25 scale-90 h-72 md:h-96 lg:h-[30rem] object-cover' 
        src="/Headphone.webp" 
        alt="Headphone" 
      />

      {/* Heading */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, staggerChildren: 0.5, stiffness: 300 }}
        className='text-4xl md:text-6xl z-50 text-center'
      >
        "Wireless Freedom.
        <br /> Pure <span className='bg-gradient-to-br from-violet-800 font-medium via-purple-600 to-yellow-400 bg-clip-text text-transparent'>Audio Bliss</span> ."
      </motion.h1>

      {/* Top-Right Ring */}
      <div 
        className="absolute ring1 sm:block -skew-y-12 -skew-x-12 md:block hidden scale-75 md:scale-100 lg:scale-150 z-40 -top-10 right-10 md:top-5 md:right-16 lg:top-10 lg:right-24 h-52 w-52"
      >
        <img 
          className='h-full w-full object-cover' 
          src="/Ring.png" 
          alt="Ring Decoration" 
        />
      </div>

      {/* Bottom-Left Ring */}
      <div 
        className="absolute ring2 sm:block md:block hidden  skew-y-12 skew-x-12  scale-75 md:scale-100 lg:scale-150 z-40 bottom-10 left-10 md:bottom-16 md:left-16 lg:bottom-20 lg:left-24 h-52 w-52"
      >
        <img 
          className='h-full w-full object-cover' 
          src="/Ring.png" 
          alt="Ring Decoration" 
        />
      </div>

      {/* Call-to-Action Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 1, stiffness: 150, damping: 8 }}
        className='p-3 z-50 cursor-pointer transition-all duration-300 delay-150 ease-in-out 
          hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:border-pink-300 
          hover:text-white text-3xl md:text-4xl rounded-xl border-5 border-black'
      >
        See More
      </motion.button>
    </div>
  )
}

export default Hero
