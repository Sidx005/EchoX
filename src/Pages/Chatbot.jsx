import React, { useState } from 'react';
import Bot from '../Components/Bot';
import { FaBars, FaPlay, FaSave } from 'react-icons/fa';
import ChatNav from '../Components/ChatNav';
import { supabase } from '../config/SupabseClient';
import { Outlet, useLocation } from 'react-router-dom';
import { FaArrowUpLong, FaUpwork } from 'react-icons/fa6';
// import { supabase } from '@supabase/auth-ui-shared';

const Chatbot = ({session}) => {
  const[show,setShow]=useState(false)
  const [response, setResponse] = useState(null);
  const location=useLocation()
  const isMainRoute=location.pathname==='/dashboard'

  const [allow, setAllow] = useState(false); // Controls the generation trigger
  const [state, setState] = useState({
    type: '',
    quantity: 0,
    features: '',
    budget: 0,
  });

  const handleInpChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendData = () => {
    setAllow(true); // Triggers the generation in the Bot component
    setTimeout(()=>setAllow(false),100)
  };

  const saveHistory = async () => {
    confirm('Are you sure you want to save this search?');
    try {
      if (session && response) {
        const { data, error } = await supabase.from('history').insert(response.map(item=>(
          {
            user_id: session.user.id,
            title: item.name, // It looks like your response items have "name" not "title"
            description: item.description,
            price: item.price,
          }
        )));
        
        if (error) {
          console.error('Error saving to history:', error);
        } else {
          console.log('Successfully saved to history');
        }
      }
    } catch (error) {
      console.error('Exception saving history:', error);
    }
  };
  return (
    <div className="min-h-screen h-full bg-white w-full ">
     <div className="profile group w-10 h-10 rounded-full absolute top-3 right-2">
      <img src={session?.user?.user_metadata?.avatar_url || ''} className='h-full w-full rounded-full object-cover' alt="" />
   <div className="p-3 group-hover:block hidden absolute top-10 right-5 min-h-20 min-w-20 rounded-md shadow-md">
      <h1 className='text-xl font-bold'> {session?.user?.user_metadata?.full_name || 'Sid'}</h1>
      <p className='text-sm text-gray-400'>{session?.user?.email || ''}</p>
      <button className='w-full rounded-md    bg-blue-600 text-white mt-2 cursor-pointer' onClick={()=>supabase.auth.signOut()}>SignOut</button>
   </div>
     </div>

        <ChatNav setShow={setShow} show={show}/>
        {/* <Outlet/> */}
      <div className="min-h-screen h-full  overflow-y-auto justify-center flex  w-full">
      <div className="w-[20%] min-h-screen ">
<FaBars className='mt-5 ml-3 scale-100' onClick={()=>setShow(true)}/>

      </div>  
         

      <div className="w-[calc(100%-20%)] flex flex-col items-center justify-center" >
  { isMainRoute?(  <>
        <h1 className="bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600 text-transparent bg-clip-text text-3xl font-bold">
          Hello {session?.user?.user_metadata?.full_name || 'User'}
        </h1>

        <div className="grid grid-cols-2 mt-5 p-3 justify-center items-center  gap-2">
          <input
            className="p-1 border-2 rounded-md"
            placeholder="Type"
            type="text"
            name="type"
            value={state.type}
            onChange={handleInpChange}
          />
          <input
            className="p-1 border-2 rounded-md"
            placeholder="Features"
            type="text"
            name="features"
            value={state.features}
            onChange={handleInpChange}
          />
          <input
            className="p-1 border-2 rounded-md"
            placeholder="Quantity"
            type="number"
            name="quantity"
            value={state.quantity}
            onChange={handleInpChange}
          />
          <input
            className="p-1 border-2 rounded-md"
            placeholder="Budget"
            type="number"
            name="budget"
            onChange={handleInpChange}
          />
          <div className="w-full col-span-2 justify-end gap-3 flex   mt-4">
          <button className='bg-blue-300 px-4 rounded-md shadow-md flex items-center gap-2  text-white'  onClick={saveHistory}>Save <FaSave/></button>
          <button className="h-7 w-7 bg-black text-white justify-center shadow-md shadow-gray-500 flex items-center  rounded-full " onClick={sendData}>
         <FaArrowUpLong className=''/>
          </button>
        </div>
        </div>
        <Bot
        response={response}
       setResponse={setResponse}
        allow={allow}
          type={state.type}
          quantity={state.quantity}
          features={state.features}
          budget={state.budget}
        />

</>):<Outlet/>
      }
     
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
