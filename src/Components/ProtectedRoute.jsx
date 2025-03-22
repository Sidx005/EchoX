import React from 'react'
import Auth from '../Pages/Auth'

const ProtectedRoute = ({children,setSession,session}) => {
    if(!session){
        return <Auth setSession={setSession}/>
    }
  return (
   children
  )
}

export default ProtectedRoute