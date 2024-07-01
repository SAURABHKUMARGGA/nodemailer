require("dotenv").config();
const express = require("express");
const cors = require('cors')
const connection = require("./Database/dbconnect");
const app = express();
const router = require("./Routes/route")


//database connection
connection();

const PORT = Number(process.env.SERVER_PORT) || 7777 ;
// console.log(typeof(PORT));
app.use(cors({
    origin:"http://localhost:5173",
    methods:"ALL",
    credentials:true,
}))
app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log("started",PORT);
})

