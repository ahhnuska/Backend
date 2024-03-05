const express=require('express')
const router=express.Router()
router.get("/",(req,res)=>{
    console.log("Hi i am at the users")
    res.send("Welcome to the user page")
})
router.get("/new",(req,res)=>{
    console.log("New admin creation on process")
    res.render("newuser",{textu:"Bitch"})
})
router.post("/",(req,res)=>{
    res.send("Create user")
})


router.route("/:id")
.get((req,res)=>{
    res.send(`User Get ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update User Get ${req.params.id}`)
    })

.delete((req,res)=>{
     
        res.send(` Delete User Get ${req.params.id}`)
    })

    //Same same but difflant
    // router.get('/:id',(req,res)=>{
     
    //     res.send(`User Get ${req.params.id}`)
// router.put('/:id',(req,res)=>{
     
//     res.send(`Update User Get ${req.params.id}`)
// })
// router.delete('/:id',(req,res)=>{
     
//     res.send(` Delete User Get ${req.params.id}`)
// })


module.exports=router