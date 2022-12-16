const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shivansh:14Jun%402001@cluster0.inurywi.mongodb.net/YogaData").then(()=>{
    console.log("connected...")
}).catch((e)=>{
console.log(e);
})
mongoose.set('strictQuery', 
false);