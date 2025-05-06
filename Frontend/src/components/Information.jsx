"use client";
import React from 'react';
import { useState } from 'react';
export default function Information({title,roadmap}) {
    

  
  return (
    <div>
       <h1>ROADMAP FOR {title}</h1>
       <div>
        <p>
          {roadmap}
        </p>
       </div>
    </div>
  )
}
