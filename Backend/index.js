import express from "express";
import dotenv from "dotenv";
import apiresponse from "./chat";

const app=express();
dotenv.config();


app.get("/",(req,res)=>{
res.send("hello ");
})

app.post("/",apiresponse);


app.listen(3000,()=>{
   console.log("server is listning ")

})

