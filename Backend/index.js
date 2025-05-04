import express from "express";
import dotenv from "dotenv";
import apiresponse from "./chat.js";
import cors from 'cors';

const app=express();
dotenv.config();
app.use(express.json());

app.use(cors({
   origin:"http://localhost:5173"
}));


app.get("/",(req,res)=>{
res.send("hello ");
})

app.post("/chat",apiresponse);


app.listen(3000,()=>{
   console.log("server is listning ")

})

