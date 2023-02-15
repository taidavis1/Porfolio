const dotenv = require("dotenv").config();
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const send = require("./ultis/send")
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post("/api/send_email" , async(req, res) => {
    const { name, email, msg } = req.body
    try{
        const to = "##############@gmail.com";
        const from = process.env.EMAIL_USER;
        const message = `
            <h3>Hello, My name is ${name} </h3>
            <h3> My Email is: ${email} </h3>
            <p>${msg}</p>
        `;
        await send(to , from , message)
        res.status(200).json({success: true, message: "Sent Successfuly!" })
    }
    catch(error){
        res.status(500).json(error.message)
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sever running on Port: ${PORT}` );
});
