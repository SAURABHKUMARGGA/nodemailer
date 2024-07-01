const user_model = require("../Schema/user_info_schema");

async function registerController(req,res){
    const name = req.body.name;
    const email =  req.body.email;
    const img = req.file.filename;
    const userExist = await user_model.findOne({email});
    if(userExist){
       return res.status(200).json({"msg":"user Exist"});
    }
    try{
        
        const inserted = await user_model.create({
            name:name,
            email:email,
            userImage:img
        })
        console.log(name,email,img);
        return inserted && res.status(201).json({"msg":"data inserted"});
    }catch(error){
        console.log("data not inserted");
       return res.status(400).json({"msg":"data not inserted"});
    }

}

module.exports = registerController;