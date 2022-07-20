//const something = require(some library)
const express = require('express');
const app = express()


app.get('/get_student',(req,res,next)=>{next()},(req,res,)=>{
res.json({
    "msg":`hello`
});
})
require('dotenv').config();
const PORT=process.env.PORT;
app.listen(PORT,(req,res)=>{
    console.log(`this server is running on PORT ${PORT}`)
});