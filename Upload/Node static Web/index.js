const expres = require("express")
const app = expres()

const port = 9000;

app.get("/",(req,res)=>{
    // res.send("Hello jeee...")
    const fpath = __dirname+"/public/index.html"
    // res.send(fpath);

    res.sendFile(fpath);
})

app.listen(port,()=>{
    console.log("server is running on port ",port);
})
