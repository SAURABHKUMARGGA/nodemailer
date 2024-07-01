const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "saurabhkumarrajgga@gmail.com",
    pass: "ltnauzwtwrhhpwgz",
  },
  tls:{
    rejectUnauthorized:false,
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function gmailController(req,res) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "saurabhkumarrajgga@gmail.com", // sender address
    to: "sapnagga34@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  info && res.status(200).json({"status":"ok","msgID":info.messageId});
//   console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = gmailController;
// main().catch(console.error);
