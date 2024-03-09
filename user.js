

const mongoose=require('mongoose')
const addressSchema=new mongoose.Schema({
    street:String,
    city:String
})

const userSchema=new mongoose.Schema({
    name:String,
    number:Number,
    createdAt:Date,
    updatedAt:Date,
    take:mongoose.SchemaTypes.ObjectId,
    hobbies:[],
    address:addressSchema
})

//model ,colection
module.exports=mongoose.model("Userz",userSchema)
module.exports=mongoose.model("Addressz",addressSchema)