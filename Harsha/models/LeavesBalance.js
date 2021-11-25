const mongoose=require('mongoose')
const LeavesBalanceSchema = new mongoose.Schema({
    userId: { type: String },
    casualLeaves:{ type: String },
    sickLeaves:{ type: String },
})

module.exports = mongoose.model('LeavesBalance',LeavesBalanceSchema)