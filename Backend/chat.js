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
    const responses=await client.responses.create({
        model:"gpt-4",
        input:`${title}`
    })
    console.log(responses);
    res.json(responses.output_text); 
} 
catch (error) {
    console.log("error while generation response")
}

}


export default apiresponse;

