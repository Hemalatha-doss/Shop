const express=require('express')
const customer=require('./routes/customer')
const service=require('./routes/service')
const cors = require('cors');
const mongoose=require('mongoose')
const app=express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/customer')

mongoose.connection.on('connected',()=>{
    console.log('mongodb connected')
})
app.get('/',(req,res)=>{
    res.send('home page')
})
app.use('/customer',customer)
app.use('/service',service)
app.listen(3003,()=>{
    console.log("server is running on port 3003")
})