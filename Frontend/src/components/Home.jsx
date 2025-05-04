import React from 'react'
import { useState } from 'react';
import { TextGenerateEffect } from "./ui/text-generate-effect";
import axios from 'axios';
const words = `Whats in your mind?`;
export default function Home() {
  const[title ,settitle]=useState("");
  const[result,setresult]=useState("");

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
    .then(response=>console.log(response.data));
    console.log(s);
  }
  return (
    <div className='h-screen text-white  bg-black'>
        <div className='text-center '>
          <h1 className='text-4xl font-bold '>Roadmap Generetor</h1>
              <hr className='mt-2 border-t-4 ' />
        </div>

        <div className='flex justify-center items-center h-1/2 flex-col gap-5'>

        <h2 className='text-2xl font-bold' > <TextGenerateEffect words={words}/></h2>
        <div className='flex justify-center items-center gap-2'>
          <form action="" onSubmit={handlesubmit}>
        <input type="text" name="" id="" placeholder='chat with AI' className='bg-gray-100 border-4 rounded-xl w-100 h-12 p-2 text-black'  value={title} onChange={handlechange}/>
        <button type='submit'><i className="fa-solid fa-circle-up text-3xl  cursor-pointer"></i></button>
        </form>
        </div>
        </div>
    </div>
  )
}
