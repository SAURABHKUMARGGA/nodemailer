const mongoose = require("mongoose")
const bcypt = require("bcryptjs");

const user_schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:String,
    userImage:String,
})

user_schema.pre("save",async function (next){
    const user = this;
    if(!user.isModified('name')){
        next();
    }
    try{
        const salt = await bcypt.genSalt(10);
        const hashname = await bcypt.hash(user.name,salt);
        user.name = hashname;
        // console.log(this);
    }catch(error){
        console.log("error");
        next(error);
    }
})

const user_model = mongoose.model("user_info",user_schema);

module.exports = user_model;