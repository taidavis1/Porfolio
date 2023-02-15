const node_mailer = require("nodemailer");
const send = async (to , from , message) => {
    const transport = node_mailer.createTransport({
        host: process.env.EMAIL_HOST , 
        port: "587" , 
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    })
    const options = {
        from: from,
        to: to,
        html: message,
    }
    transport.sendMail(options, function(err , info){
        if (err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    })
};
module.exports = send;

