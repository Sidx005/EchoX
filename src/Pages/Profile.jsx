import React from 'react'
import { supabase } from '../config/SupabseClient'

const Profile = ({session,setSession}) => {
  return (
    <div className='flex gap-5 flex-col items-center justify-center'>
        <h1>Profile</h1>
    <div className="w-20 h-20 rounded-full">    <img src={session?.user?.user_metadata?.avatar_url} className=' h-full w-full object-cover   shadow-md rounded-full' alt="" />
    </div>
    <p className='flex gap-2 items-center'>Name:  <span className='underline'>{session?.user?.user_metadata?.name} </span></p>
    <p className='flex gap-2 items-center'>Mail:  <span className='underline'>{session?.user?.user_metadata?.email} </span></p>
    <button onClick={()=>supabase.auth.signOut()} className='p-3 bg-blue-500 text-white rounded-md'>Logout</button>
    </div>
  )
}

export default Profile