import React, { useEffect, useState } from 'react';
import { supabase } from '../config/SupabseClient';
import { div } from 'motion/react-client';
import { FaSpinner } from 'react-icons/fa';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const session = sessionData?.session;
    if (!session) {
      console.error('No active session found');
      return;
    }

    const uuid = session.user.id;
    const { data, error } = await supabase.from('history').select('*').eq('user_id', uuid);
   setLoading(false)
    if (error) {
      console.error(error);
      return;
    }
    setHistory(data);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  console.log(history);

  return (
    <div className="flex flex-col mt-20 gap-10 p-5 items-center min-h-screen h-full justify-center">
      <h2 className="font-bold">History</h2>
     {loading?<FaSpinner className='animate-spin'/>:  <div className="h-96 grid grid-cols-1 gap-5 p-2 shadow-md md:grid-cols-2 lg:grid-cols-3 w-full overflow-y-auto">
       {
        history.map((item, index) => (
            <div className='min-h-52 w-52  p-5 bg-white shadow-md shadow-blue-300 rounded-md'>

                {item.title && <h3 className='font-bold text-lg'>{item.title}</h3>}
                {item.description && <p className='text-sm'>{item.description}</p>}
                {item.price && <span className='text-blue-600 font-semibold'>Rs.{item.price}</span>}
                {item.created_at && <h3 className='text-gray-400 text-sm'>{new Date(item.created_at).toLocaleDateString()}</h3>}
            </div>
        ))
       }
      </div>}
    </div>
  );
};

export default History;
