const { default: mongoose } = require('mongoose')

const express=require('express')

const mongoose=require('mongoose')
const { logDOM, logRoles } = require('@testing-library/react')


const app=express()

mongoose.connect=('mongodb://127.0.0.1:27017/Group')
mangoose.connection.on('conected',()=>{console.log('mangoose is connected')})

app.listen(3000,()=>{
    console.log('server is running');

})