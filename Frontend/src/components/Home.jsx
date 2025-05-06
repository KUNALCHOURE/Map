import React from 'react'
import { useState } from 'react';
import { TextGenerateEffect } from "./ui/text-generate-effect";
import axios from 'axios';
import Information from './Information';
const words = `Whats in your mind?`;
export default function Home() {
  const[title ,settitle]=useState("");
  const[result,setresult]=useState("roadmap");

  const handlechange=(e)=>{
     settitle(e.target.value);
  
  }

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const s= await axios.post("http://localhost:3000/chat",{title:"WEB DEV"},{
      headers: {
        "Content-Type": "application/json"
     }
    })
    .then((response)=>{
      console.log(response.data.roadmap)
    setresult(response.data.roadmap);
  });
    
   
  }
  return (
    (result?<Information title={title} roadmap={result}/>:
    <div className='h-screen text-white  bg-black'>
        <div className='text-center '>
          <h1 className='text-4xl font-bold '>Roadmap Generetor</h1>
              <hr className='mt-2 border-t-4 ' />
        </div>

        <div className='flex justify-center items-center h-1/2 flex-col gap-5'>

        <h2 className='text-2xl font-bold' > <TextGenerateEffect words={words}/></h2>
        <div className='items-center gap-2 w-full'>
          <form action="" onSubmit={handlesubmit} className='flex flex-row gap-2 justify-center align-center'>
        <input type="text" name="" id="" placeholder='chat with AI' className='bg-gray-100 border-4 rounded-xl w-1/2 h-12 p-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500'  value={title} onChange={handlechange}/>
        <button type='submit'><i className="fa-solid fa-circle-up text-3xl  cursor-pointer"></i></button>
        </form>
        </div>
        </div>
    </div>
    
    )
    
  )
}
