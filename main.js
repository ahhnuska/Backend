//creating express server
const express = require('express')
//creating the a variable to create an server
const app=express()
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    console.log("Hi")
    res.render("index",{add:"WELCOME"})
    // res.status(500).send("Hi")/.json({message:"Error"})
    // res.download("main.js")
    // res.send("Welcome to the home page")
    
})

const userRoutes = require('./routes/users')
app.use('/users',userRoutes)
//run the server with port
app.listen(3000)
