const mongoose=require('mongoose')
const StatusSchema = new mongoose.Schema({
    statusId: { type: Number },
    statusName:{ type: String },
    
})

module.exports = mongoose.model('Status', StatusSchema)