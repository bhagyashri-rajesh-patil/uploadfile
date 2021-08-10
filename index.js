const express = require("express");
const path = require("path");
const fs= require("fs");
const app = express();
const port=80;
const upload= require('express-fileupload')

app.use(upload())

app.get('/',(req,res) =>{
    res.sendFile(__dirname +'/index.html')
    // res.status(200).render('./index.html');
})
app.post('/',(req,res)=>{
    if(req.files){
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('./uploads/'+filename,function(err){
            if(err){
                res.send(err)
            }
            else{
                res.send("File Uploaded")
            }
        })
    }
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

