const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    secure: false,
  
    auth: {
      user: "api",
      pass: process.env.MAIL_PASSWORD,
    },
    tls:{
      rejectUnauthorized: false
 }
  });
  const mailController = async (req,res)=>{
    const info = await transporter.sendMail({
        from: "demomailtrap.com", // sender address
        to: "iifawork123@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log(info);
      info.messageId && res.status(200).json({"name":"saurabh"})
  }
 
  module.exports = mailController;