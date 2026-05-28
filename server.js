
const express=require("express");
const path=require("path");

const app=express();

app.use(express.static("public"));

app.get("/admin",(req,res)=>{
  res.sendFile(path.join(__dirname,"admin/index.html"));
});

app.listen(process.env.PORT||3000);
