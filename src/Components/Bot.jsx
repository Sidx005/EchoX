import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useEffect, useState } from 'react';

const Bot = ({ type,response,setResponse, allow, budget, quantity, features }) => {
  const[error,setError]=useState(false)
  const[loading,setLoading]=useState(false)

 const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
    Recommend ${quantity || 5} ${type || 'headphones'} under ₹${budget || 1000} in Indian Rupees with the following features: ${features || 'basic'}. 
    Provide the output as a JSON array of objects, where each object contains: 
    "name", "description", "price".
    Noten that the "price" should be a number, not a string. 
   
    Return only a JSON array, no additional text.
  `;

  const generate = async () => {
    setLoading(true)

    try {
      const result = await model.generateContent(prompt);
      let text = result.response.text();
      console.log(result);
  
      if (text.startsWith('```json')) {
        text = text.substring(7, text.lastIndexOf('```'));
      }
  
      try {
        const jsonResponse = JSON.parse(text);
        setResponse(jsonResponse);
        setLoading(false)
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError, 'Raw response:', text);
        setResponse([{ name: 'Error', description: 'Could not retrieve results', price: 0, image: 'https://via.placeholder.com/150' }]);
      }
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse([{ name: 'Error', description: 'Could not retrieve results', price: 0, image: 'https://via.placeholder.com/150' }]);
     setError(true)
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    if (allow) {
      generate();
    }
  }, [allow]);
  

  return (
    <div className={`w-1/2 rounded-md shadow-md  overflow-y-auto ${response?'h-52':''} `}>
      {loading?<p className='text-center'>Loading ...</p>:response ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {response.map((item, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              {/* <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mb-4"
              /> */}
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm">{item.description}</p>
              <span className="text-green-600 font-semibold">
                Rs.{item.price}
              </span>
            </div>
          ))}
        </div>
      ) : (
       ""
      )}
    </div>
  );
};

export default Bot;