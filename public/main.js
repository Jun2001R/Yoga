var userid = {
    firstName:"",
    lastName:"",
    emailId:"hello@gmail.com",
    telephone:"",
    gender:"",
    dateOfBirth:"",
    address:"",
    password:"",
    confirmPassword:"",
    paymentStatus:"unpaid",
    lastPaymentMonth:"N/A",
    lastPaymentYear:"00",
    paymentHistory:[]
};
let r = (Math.random() + 1).toString(36).substring(2);
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
// app.set("view engine", "hbs");
app.set("view engine", "ejs");
// app.set('views', staticPath);
app.use(express.urlencoded({ extended: false }));
mongoose.set('strictQuery', true);
const port = process.env.PORT || 8000 || 3000;
const Studentregistration = require("./schema");
const { json } = require("express");
require("./conn")
app.get("/registration",(req,res)=>{
    res.render("registration",{ERROR:"Hi"});
})
app.post("/registration", async(req, res)=>{
    const studentData = new Studentregistration({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        emailId:req.body.emailId,
        telephone:req.body.telephone,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        address:req.body.address,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    })
    try{
        if(req.body.password === req.body.confirmPassword)
        {
            const data = await studentData.save();
            res.render("success");
        }
        else{
const e = "Please type Password carefully";
        res.render("error",{ERROR:e});
}
    }catch(e)
    {
        e="This email is already registered register through another email";
        res.render("error",{ERROR:e});
    }
})
app.get("/login",(req, res)=>{
    res.render("login");
})
app.post("/login",async(req, res)=>{
    try{
const emailId = req.body.emailId;
const Password = req.body.password;
const user = await Studentregistration.findOne({emailId:emailId});
if(user.password === Password)
{
    userid = user;
    res.render("dashboard",{name:`${userid.firstName} ${userid.lastName}`,
    dateOfBirth:`${userid.dateOfBirth}`,
    gender:`${userid.gender}`,
    emailId:`${userid.emailId}`,
    phoneNo:`${userid.telephone}`,
    address:`${userid.address}`,
    paymentStatus:`${userid.paymentStatus}`,
    lastPaymentDate:`${userid.lastPaymentMonth} ${userid.lastPaymentYear}`,
    paymentHistory:`${userid.paymentHistory}`,
    batchSelected:`${userid.batchSelected}`,
    r:`${r}`
    })  
}
else{
    res.render("error",{ERROR:"Invalid Credentials"});
}
    }catch(e)
    {
        res.render("error",{ERROR:"You are not Registered ! First Register Your Self"})
    }
})
app.post("/payment",async(req, res)=>{
    try{
        const identity = req.body.emails;
        const data = await Studentregistration.findOne({emailId:identity});
        res.render("payment",{name:`${data.firstName} ${data.lastName}`,
        email:`${data.emailId}`
        })
    }catch(e)
    {
        e="try Again"
        res.render("errorpay",{ERROR:e})
    }
   
})
app.post("/success",async(req,res)=>{
    try{
        const EmailId = req.body.emails;
        const lastPaymentMonth = req.body.lastPaymentMonth;
        const lastPaymentYear = req.body.lastPaymentYear;
        const batchSelected = req.body.batchSelected;
       const result = await Studentregistration.updateOne({emailId:EmailId},{$set:{paymentStatus:"Paid", lastPaymentMonth:lastPaymentMonth[0], lastPaymentYear:lastPaymentMonth[1], batchSelected:batchSelected}})
       res.render("successpay");
    }catch(e)
    {
        e="there is error in Payement Please try again"
        res.render("error",{ERROR:e})
    }
  
})
app.get("*", (req, res) => {
    res.send("404error");
})
app.listen(port,()=>{
    console.log("listened...")
})
const dat = new Date();
const m = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const y = dat.getFullYear();
const updateDocument = async()=>{
   const result = await Studentregistration.updateMany({$or: [{lastPaymentMonth:{$ne:m[dat.getMonth()]}},{lastPaymentYear:{$ne:y}}]},{$set:{paymentStatus:"unPaid"}})
   console.log(result)
}
const fun = setInterval(()=>{
    if(dat.getDate()=="1")
    updateDocument();
}, 82800000)
