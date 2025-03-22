import { motion } from 'motion/react'
import React from 'react'
// motion
const Section3 = () => {
  return (
    <div className='min-h-[45vh] gap-10 md:min-h-[65vh] lg:min-h-[37vh] p-10 md:p-3 overflow-hidden items-center bg-linear-to-br from-blue-400 flex flex-col to-blue-700 text-center'>
        <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} className='text-white  border mt-5 bg-[rgba(255,255,255,.1)] w-max p-1 text-xs rounded-md '>AI Assistance</motion.h1>
      <motion.div className='w-full p-10 md:mt-10 flex md:flex-row gap-5 justify-center  flex-col items-center'>
  <img className=' h-44 rotate-y-180 rounded-md object-cover' src="https://imgs.search.brave.com/AORpt4dCplEdc4YDTQrm4coHREnmaPf5pXNvhqmYI5g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NjExODkzMy9waG90/by9haS1jaGF0Ym90/LWFzc2lzdGFudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/X0xmOWp3QU9icEh6/YUhMN2I0LWNRS2tH/RVd1MWt6VHFaYXNG/MG5ka2FmND0" alt="" />
   <motion.div className='text-center   md:text-left w-full md:w-1/2'>
    <motion.h1   transition={{ duration: 0.6, delay: 0.2 }} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className='text-white text-2xl font-bold
    '>Personalised AI Bot Assistance</motion.h1>
    <motion.p   transition={{ duration: 0.6, delay: 0.4 }} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className='text-white text-xl mt-5'>Our AI Bot is designed to assist you in making the right choice. It will help you to choose the best product according to your needs.</motion.p>
   </motion.div>
      </motion.div>
    </div>
  )
}

export default Section3