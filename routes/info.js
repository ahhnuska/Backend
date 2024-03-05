const express=require('express')
const router=express.Router()
router.use(express.json())

const newItem=[
    {
        id:1,
        name:"Carnaline"
    },
    {
        id:2,
        name:"Amethyst"
    },
    {
        id:3,
        name:"RoseQuartz"
    },
    {
        id:4,
        name:"Citrine"
    }

]



router.get("/",(req,res)=>{
    res.send("Info page")
    console.log("2")

})
router.get("/newitems",(req,res)=>{
    console.log("New items page")
    res.json({
        new:newItem
    })
})
module.exports=router