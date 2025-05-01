import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `Whats in your mind?`;
export default function Home() {
  return (
    <div className='h-screen text-white  bg-black'>
        <div className='text-center '>
          <h1 className='text-4xl font-bold '>Roadmap Generetor</h1>
              <hr className='mt-2 border-t-4 ' />
        </div>

        <div className='flex justify-center items-center h-1/2 flex-col gap-5'>

        <h2 className='text-2xl font-bold' > <TextGenerateEffect words={words}/></h2>
        <input type="text" name="" id="" placeholder='chat with AI' className='bg-gray-100 border-4 rounded-xl w-100 h-12 p-2 text-black'/>
        </div>
    </div>
  )
}
