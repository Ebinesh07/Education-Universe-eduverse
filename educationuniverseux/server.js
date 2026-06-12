const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const mydb = require("./modal/db");
const PORT = 9000;
// frontend setup
const app = express();
app.use(express.json());
app.use(cors());
// backend setup
app.get('/',(req,res)=>{
    res.send("wellcome to the Eduverse")
    res.end()
})
app.post('/contact',async(req,res)=>{
    try{
        const{name,email,phone,text}=req.body;
        const newContactdata ={name,email,phone,text}
        console.log(newContactdata);
        console.log ("data received in database",newContactdata)
        if(!name ||!email||!phone||!text){
            console.error("plese fill all the fields in front end ")
            res.status(400).json({Error:"plese fill all the fields in front end ..client side error"})
        }
        else{
            const contactdata=new mydb(newContactdata)
            await contactdata.save();
            res.status(200).json({Messages:"data saved successfully...!"})
        }
        
    }
    catch(err){
        console.log("data will not save in DB", err)
        res.status(500).json({
        Error:"data will not save in DB.... server side error",
        message: err.message
    })
}
})
// db setup
mongoose.connect("mongodb+srv://ebinesh:ebi12345@ebinesh.g5kd8hi.mongodb.net/ebinesh?appName=Ebinesh")
.then((res)=>{
    console.log("database connected successfully")
    })
.catch((err)=>{
    console.log("DB Will not connect");
    console.log(err);
})

// deployment setup
app.listen(PORT,(err)=>{
    if(err){
    console.log("server will not send",err)
    }
    else{
        console.log(`server is running on port ${PORT}`)
        }
})