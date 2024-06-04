import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("Server is running");
})

app.get("/", (req, res)=> { // forward slash / means here as the path, here its entire home page.
    res.send("<h1>Hello World!<h1>"); //for bettwe understanding check console.log(req), and also req.some method associated wit that
})

app.get("/about", (req, res)=> { // forward slash / means here as the path, here its entire home page.
    res.send("<h1>About Me<h1><p>Hi, I'm Pavithra!!</p>"); //for bettwe understanding check console.log(req), and also req.some method associated wit that
})

app.get("/contact", (req, res)=> { // forward slash / means here as the path, here its entire home page.
    res.send("<h1>Contact<h1><p>My contact number is +123456789 </p>"); //for bettwe understanding check console.log(req), and also req.some method associated wit that
})
