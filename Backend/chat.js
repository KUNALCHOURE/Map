import { response } from "express";
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();
const client=new OpenAI(
    {
    apiKey: process.env.API_KEY
    }
);


const apiresponse=async()=>{

const responses=await client.responses.create({
    model:"gpt-4",
    input:"Write a one sentence bedtime story about a unicorn"
})

 res.json(responses.output_text);
}


export default apiresponse;

