//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

//specify the directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
 res.sendFile(__dirname + "/public/index.html");
})

app.use(logger);

function logger(req, res, next){
    if(req.body['password']=="iLoveChocolate"){
        app.post("/check", (req, res)=>{
             res.sendFile(__dirname + "/public/secret.html");
        });
    }
    else{
           //Alternatively res.redirect("/");
        res.sendFile(__dirname + "/public/index.html");
    }
    next();
}
app.listen(port, (req, res)=>{
 console.log("Server is up and running");
})
