const mongoose=require('mongoose')
const roleDetailsSchema = new mongoose.Schema({
    userId: { type:Number},
    role:{ type: String },
})
module.exports = mongoose.model('roleDetails', roleDetailsSchema)