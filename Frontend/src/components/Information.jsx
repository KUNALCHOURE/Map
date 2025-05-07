"use client";
import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Information({ title, roadmap }) {
  const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 flex-col">
      <div className="bg-zinc-900 shadow-2xl rounded-2xl p-8 max-w-5xl w-full border border-gray-700">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Roadmap for <span className="text-blue-500">{title}</span>
        </h1>
        <div className="bg-zinc-800 p-6 rounded-xl border border-gray-700 max-h-[70vh] overflow-y-auto">
          <p className="whitespace-pre-line leading-relaxed text-gray-300 text-lg">
            {roadmap}
          </p>
        </div>
      </div>

      <div className="border border-blue-300 rounded-xl w-20 text-center mt-7 ">
        <button className="w-full bg-white text-black rounded-xl" onClick={()=>navigate("/")}>Back</button>
      </div>
    </div>
  );
}
