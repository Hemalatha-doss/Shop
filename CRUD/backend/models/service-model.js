const mongoose=require('mongoose')
const ServiceSchema=new mongoose.Schema({
    name:String,
    location:String,
    servicedescription:String,
    Timing:String

})
const ServiceModel=mongoose.model('/service',ServiceSchema)

module.exports=ServiceModel