const express=require('express')

const mongoose=require('mongoose')

const app=express()

mongoose.connect("mongodb://127.0.0.1:27017/Group")
mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected')
})
app.get('/',(req,res)=>{
    res.send("Home Page")
})


app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})

