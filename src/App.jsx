import React, { useEffect, useState } from 'react'
import { data, Outlet, Route, Routes } from 'react-router-dom'
// import Home from './Components/Hero'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Chatbot from './Pages/Chatbot'
import { supabase } from './config/SupabseClient'
import ProtectedRoute from './Components/ProtectedRoute'
import Profile from './Pages/Profile'
import History from './Pages/History'

// import Hero from './Components/Hero'

const App = () => {
  const [session, setSession] = useState(false)

  useEffect(()=>{
    supabase.auth.getSession().then(({data:{session}})=>{
      setSession(session)
    })
    const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,session)=>{
      setSession(session)
    })
    return ()=>subscription.unsubscribe()
  },[])
 
  return (
    <div className="min-h-screen overflow-x-hidden relative h-full bg-black">
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard'  element={<ProtectedRoute setSession={setSession} session={session}><Chatbot session={session}/></ProtectedRoute>}>
    <Route path='History' element={<History/>}/>
    <Route path='Profile' element={<Profile setSession={setSession} session={session}/>}/>
    </Route>
   </Routes>
   </div>

  )
}

export default App