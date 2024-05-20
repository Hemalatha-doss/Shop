const express=require('express')
const bodyParser=require('body-parser')

const CustomerModel=require('../models/customer-model')
const router=express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send('customer page')
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newCustomer=new CustomerModel(req.body)
    newCustomer.save()
    .then(response=>console.log(response))
    .catch(err=>{console.log(err)})
    res.send('customer posting page')
})

router.get('/get/:email',(req,res)=>{
    console.log(req.params.email)
    CustomerModel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})


module.exports=router