import { response } from "express";
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();
const client=new OpenAI(
    {
    apiKey: process.env.API_KEY
    }
);


const apiresponse=async(req,res)=>{
try {
    console.log("in controllers")
    let {title}=req.body;
    const responses=await client.chat.completions.create({
        model:"gpt-4",
        messages: [
            { role: "system", content: "You are an expert roadmap planner." },
            { role: "user", content: `Create a detailed learning roadmap for the topic "${title}".
            
        Divide it into:
        1. Basic Level
        2. Intermediate Level
        3. Advanced Level
        
        Include:
        - Key concepts
        - Tools/technologies
        - Learning goals
        - Optional resources
        
        Use clear headings.` }
          ]
        });
        console.log(responses.choices[0].message.content);

    res.json({ roadmap: responses.choices[0].message.content });

} 
catch (error) {
    console.log("error while generation response")
}

}


export default apiresponse;

