const express=require('express');

const app=express()

const mongoose=require("mongoose");

const morgan=require("morgan");

const bodyParser=require('body-parser');

const postroutes=require("./routes/port");

const dotenv=require("dotenv");


const expressValidator=require('express-validator')

dotenv.config();



mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log('db connected');

})

mongoose.connection.on("error",err=>{
    console.log(`db connection err${err.message}`);
})




const {getposts}=require("./routes/port")

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/',postroutes);



const port=process.env.PORT || 8080;


app.listen(port,()=>{
    console.log(`a node js api is listen${port}`);
});