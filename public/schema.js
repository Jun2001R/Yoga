const mongoose = require("mongoose")
const validator = require("validator")
const regSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:[true, "it has been already registered"],
        validate(value)
{
if(!(validator.isEmail(value)))
{
    throw new Error("Email is invalid");
}
}
    },
telephone:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
},
dateOfBirth:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
confirmPassword:{
    type:String,
    required:true
},
paymentStatus:{
    type:String,
    required:true,
    default:"unPaid"
},
lastPaymentMonth:{
    type:String,
    required:true,
    default:"N/A"
},
lastPaymentYear:{
    type:String,
    required:true,
    default:"00"
},
paymentHistory:[{
type:String
}],
batchSelected:{
    type:String,
    default:"N/A"
}
})
const Studentregistration = new mongoose.model("participant", regSchema)
let store = new Studentregistration({
    firstName:"",
    lastName:"",
    emailId:"test@gmail.com",
    telephone:"",
    gender:"",
    dateOfBirth:"",
    address:"",
    password:"",
    confirmPassword:""
},{_id:false})
module.exports = Studentregistration;