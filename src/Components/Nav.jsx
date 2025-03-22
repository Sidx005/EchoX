import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navRef=useRef(null)
const navigate=  useNavigate(null)
  const[show,setShow]=useState(false)
  const [prevScrollY,setPrevScrollY]=useState(0)
useEffect(()=>{
  const handleScroll=()=>{
const nav=navRef.current;
if(!nav) return;
if(window.scrollY===0){
  nav.style.position='sticky'
  nav.style.transfrom='translateY(0)'
}else{
  nav.style.position='fixed'
  // nav.style.transform='translateY(-100%)'
  if(window.scrollY>prevScrollY){
    nav.style.transform='translateY(-100%)'
  }else{
    nav.style.transform='translateY(0)'
  }
}
setPrevScrollY(window.scrollY)
  
}
window.addEventListener('scroll',handleScroll)
return ()=>window.removeEventListener('scroll',handleScroll)
},[prevScrollY])

  return (
    <>
<div ref={navRef}  className='text-white border-b-2 border-b-gray-300  transition-all ease-in-out delay-100  z-70 h-11 md:h-24 top-0 w-full flex justify-center gap-10 items-center  backdrop-blur-md nav p-6 '>
    <div className="logo ">
        <h1 className='text-2xl  font-bold'>EchoX</h1>
    </div>
    <div className="relative p-3 md:flex hidden sm:h-hidden border border-violet-500 rounded-3xl" >
<Link to='/' className='p-2'>Home</Link>
        <Link to='/dashboard' className='p-2'>Chatbot</Link>
        <Link to='/' className='p-2'>Contact Us</Link>
         </div>
         <div onClick={()=>setShow(!show)} className="md:hidden block text-2xl">
          <FaBarsStaggered className=''/>

         </div>
         <button onClick={()=>navigate('/dashboard')} className="p-1 bg-gradient-to-br from-purple-400 to-violet-700 rounded-md w-16">
          Login
         </button>

         </div>
         <div className={`fixed   left-0 top-1/2 z-75 min-h-40 rounded-md -translate-y-1/2 md:hidden transition-all ease-in-out delay-75 ${show?'-translate-x-0':'-translate-x-[200%]'} w-20 px-2 py-4 text-white bg-[rgba(0,0,0,0.52)] shadow-md shadow-white backdrop-blur-3xl`}>
         <div className="w-full"> <div className="w-2 h-2 p-1 flex justify-center items-center rounded-full bg-green-300">
          <div className="  p-0.5 rounded-full bg-black">

          </div>
          </div></div>
          <ul className='flex-col w-full flex items-start text-left gap-2'>
            <Link to={'/'}>Home</Link>
            <Link to={'/dashboard'}>Chatbot</Link>
            <Link>Contact</Link>
            </ul> 
         </div>
         </>
  )
}

export default Nav