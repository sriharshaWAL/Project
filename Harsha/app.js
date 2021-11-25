const express=require('express')
const app=express()
const authRouter=require('./routes/auth')
app.use(express.json())
//app.use(express.urlencoded({extended:false}))
app.use('/api',authRouter)
app.use('/uploads',express.static('uploads'))
//  MongoDB connection 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tests', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
	console.log('Connected to MongoDB')
})
app.listen(3000,()=>{
	console.log('server is running on 3000 port')
})
module.exports=app;