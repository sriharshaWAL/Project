const mongoose=require('mongoose')
const userDetailsSchema = new mongoose.Schema({
    userId:{type:Number},
    firstName:{type:String},
    lastName:{type:String},
    emailId:{ type: String },
    password:{ type: String },
    gender:{type:String},
    phone:{type:String},
    dateOfBirth:{type:Date},
    dateOfJoining:{type:Date},
    isActive:{type:Boolean},
})

module.exports = mongoose.model('userDetails',  userDetailsSchema)