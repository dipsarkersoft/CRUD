const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const{readdirSync}=require('fs')
const cors=require("cors")
const path = require("path")
const http = require('http');
const app =express()
app.use(express.json())



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

//frontend....

app.use(express.static(path.join(__dirname,"client_site/build")))





readdirSync("./src/routes/").map(r =>app.use("/api/v1", require(`./src/routes/${r}`)))


//DATABASE
const port=process.env.PORT
const URI=process.env.URI


mongoose.connect(URI,(error)=>{
     console.log(error)
})



app.listen(port,(error)=>{
    if(error){
     console.log(error)
    }
    else{console.log("Database Connection Sucess "+port)}

})

app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client_site','build','index.html'))
})