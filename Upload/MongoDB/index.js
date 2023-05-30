const express = require('express')
const mongoose = require('mongoose')
const user = require('./modules')

const app = express();
app.use(express.json());

const port = 65535;
const uri = "mongodb://127.0.0.1:27017/Abhi"

app.listen(port,()=>{
    console.log("server is running on port",port)
})

const pr = mongoose.connect(uri);
pr.then(()=> console.log("Database connected"))
pr.catch((er)=> console.log(er))

// Adding the 4 api call 

//1) getting all the users
app.get("/", async (req,res)=>{

    try
    {
        const allUsers = await user.find();
        res.json(allUsers);
    }
    catch
    {
        res.send("somthing went wrong")
    }
})

//2) geting by ID
app.get("/:id" , async(req,res)=>{

    const uid = req.params.id;

    try 
    {   
        const oneUser = await user.findById(uid);
        res.json(oneUser);
    }
    catch
    {   
        res.send("something went wrong")
    }
})

// 3) add the user
app.post("/",async(req,res)=>{

    try
    {
        const newUser = await user.create(req.body);
        res.json(newUser);
    }
    catch
    {   
        res.send("something went wrong")
    }
})

//4) update the user
app.put("/:id",async(req,res)=>{

    const uid = req.params.id;
    try{

        const updated = await user.updateOne(
            {
                "_id" : uid
            },
            req.body
        )

        res.json(updated);
    }
    catch
    {   
        res.send("something went wrong")
    }
})

//5) delete by id
app.delete("/:id",async (req,res)=>{

    const uid = req.params.id;
    try
    {
        const oneUser = await user.findById(uid);  
        oneUser.deleteOne();
        res.send("user deleted ")
    }
    catch
    {   
        res.send("something went wrong")
    }
})

// 6) login

app.post("/login",async(req,res)=>{

    try
    {
        const dbUser = await user.findOne({name:req.body.name})
        if(dbUser == null)
        {
            res.send("user not found ..");
        }

        else
        {
            if(req.body.email == dbUser.email)
            {
                res.send("login success ")
            }
            else
            {
                res.send("invalid login")
            }
        }
    }
    catch (er){
        console.log(er);
    }
})