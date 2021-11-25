const mongoose=require('mongoose')
const LeavesDetailsSchema = new mongoose.Schema({
    leaveId:{type:Number},
    typeOfLeaves:{type:String},
    submittedTo:{ type: Number},
    submittedBy:{ type: Number },
    requestDate:{type:Date},
    approverOrRejectedDate:{type:Date},
    statusId:{type:Number},
    certificateDoc:{type:String},
    leaveFromDate:{type:Date},
    leaveToDate:{type:Date}
})

module.exports = mongoose.model('LeavesDetails',  LeavesDetailsSchema)