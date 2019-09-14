const express= require('express');
var app= express();

require('dotenv').config();


const twilioData = {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
    phone: process.env.TWILIO_PHONE
}

const baby = {
    name : process.env.BABY_NAME,
    phone : process.env.BABY_PHONE
}

const twilio = require('twilio');

const client = new twilio(twilioData.sid, twilioData.token);


const port= process.env.HOST_PORT || 3000;

app.get('/', function(req, res){
//     client.messages
//   .create({
//      body: 'Just trying new things, boi',
//      from: twilioData.phone
//      to: baby.phone
//    })
//   .then(message => {
//       console.log(message.sid)
//       res.send('Hello World! Message is sent');
// });
    res.send('Hello world')
})

app.listen(port,function(){
    console.log('Example app listening on port '+ port)
})