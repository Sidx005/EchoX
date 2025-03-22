import React,{useState} from 'react'
import { FaArrowRight, FaBars } from 'react-icons/fa'
import { FaLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ChatNav = ({show,setShow}) => {

  
  return (

    <div className={`md:w-[20%]  transition-all ease-in-out delay-100  rounded-r-md min-h-screen fixed top-0 left-0 z-50 ${show?'translate-x-0':'-translate-x-[200%]'} md:translate-x-0 chatNav`}>
        <div className="overlay "></div>
        <div className="h-screen  overflow-y-auto w-full flex flex-col  p-5 backdrop-blur-xl text-left">
        <p   className='flex font-medium items-center justify-between'><Link to={'/dashboard'}>PodChat</Link> <button className='md:hidden block' onClick={()=>setShow(false)}><FaLeftLong/></button></p >
        <Link to={'/'} className='mt-10 w-full p-5 flex justify-between items-center bg-amber-50 rounded-lg'>Home <p><FaArrowRight/></p></Link>
        <Link to={''} className='mt-10 w-full p-5 flex justify-between items-center bg-amber-50 rounded-lg'>ChatBot <p><FaArrowRight/></p></Link>
        <Link to={'History'}  className='mt-10 w-full p-5 flex justify-between items-center bg-amber-50 rounded-lg'>History <p><FaArrowRight/></p></Link>
        <Link to={'Profile'} className='mt-10 w-full p-5 flex justify-between items-center bg-amber-50 rounded-lg'>Profile <p><FaArrowRight/></p></Link>
       
        </div>
    </div>
  )
}

export default ChatNav