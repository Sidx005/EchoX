import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../config/SupabseClient'
// import { GoogleOAuthProvider } from '@react-oauth/google'
const Auth = ({setSession}) => {
    const navigate=useNavigate(null)
    const handleGoogle=async(credentialResponse)=>{
        try {
            const{data,error}=await supabase.auth.signInWithIdToken({
                provider:'google',
                token:credentialResponse.credential
            }
        
        

        )
        if(error){
            console.error(error.message);
            return;
            
        }
        setSession(data.session)
        navigate('/dashboard')
           
        } catch (error) {
            console.error(error);
            
        }
    }
  return (
    <div className='min-h-screen flex justify-center items-center bg-white text-white'>
        <div className="h-86 p-5 rounded-md shadow-md w-86">
           <h1 className="font-bold text-center text-black  text-xl">
            Sign In
           </h1>
           <GoogleLogin onSuccess={handleGoogle } onError={()=>console.log('Login Failed')
           }/>
        </div>
    </div>
  )
}

export default Auth