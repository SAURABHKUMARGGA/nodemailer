const mongoose = require("mongoose")

async function connection(){
    await mongoose.connect("mongodb+srv://"+process.env.CONNECTION_STRING+"@my-cluster.dt34ibm.mongodb.net/iifa").then(()=>{
        console.log("connected");
    }).catch(()=>{
        console.log("error");
    })
}

module.exports = connection;
