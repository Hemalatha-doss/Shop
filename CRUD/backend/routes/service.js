const express=require('express')
const bodyParser=require('body-parser')

const ServiceModel=require('../models/service-model')
const router=express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send('service page')
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newService=new ServiceModel(req.body)
    newService.save()
    .then(response=>console.log(response))
    .catch(err=>{console.log(err)})
    res.send('service posting page')
})

// router.get('/get/:email',(req,res)=>{
//     console.log(req.params.email)
//     ServiceModel.find({email:req.params.email})
//     .then(response=>res.send(response))
//     .catch(err=>console.log(err))
// })


module.exports=router