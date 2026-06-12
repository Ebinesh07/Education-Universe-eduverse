
const mongoose = require("mongoose")
const myDatabase = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }  
},{
    collection:"educontact"
});
module.exports=mongoose.model("educontact",myDatabase,"educontact");