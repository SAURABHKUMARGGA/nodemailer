require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Routes/route")
const PORT = Number(process.env.SERVER_PORT) || 7777 ;
// console.log(typeof(PORT));

app.use(router);

app.listen(PORT,()=>{
    console.log("started",PORT);
})

