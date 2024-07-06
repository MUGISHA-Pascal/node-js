const express=require("express");
const path=require("path");
const multer=require("multer");
const app=express();

const storage=multer.diskStorage({
    diskStorage:(req,file,cb)=>{
        cb(null,"uploads/");
    },filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({storage:storage});

app.use(express.static("public"));

app.post("/upload",upload.single("file"),(req,res)=>{
    res.send("file uploaded successfully");
});

app.listen(3000,()=>{
    console.log("app running on http://localhost:3000");
})