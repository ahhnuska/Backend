
const mongoose=require('mongoose')
const user=require('./user')
mongoose.connect("mongodb://localhost/test")
.then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });

run()
async function run(){
    const users=await user.create({
        name:"swami",
        number:123,
        createdAt:Date,
        updatedAt:Date,
        take:mongoose.SchemaTypes.ObjectId,
        hobbies:[],
        address:{
            street:"Swayambhu",
            city:"Kathmandu"
        }
    })
    
    users.name="ANuksa"
    await users.save()
    console.log("User Saved",users)

}

        
    // const useras=new user({
    //     name:"lao",
    //     number:123
    // })
    // await useras.save()
    // console.log("User Savedd",useras)



