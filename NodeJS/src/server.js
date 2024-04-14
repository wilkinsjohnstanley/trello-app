import express from 'express';

const app = express();
const port = 8080;

app.get("/", (req, res)=>{
    res.send("hello world with node.js")
})
app.listen(port, ()=>{
    console.log("Node.js server is running on port: " + port);
})