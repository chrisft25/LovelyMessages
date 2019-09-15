require('dotenv').config();


const twilioData = {
    sid: String(process.env.TWILIO_SID),
    token: String(process.env.TWILIO_TOKEN),
    phone: process.env.TWILIO_PHONE
}

const baby = {
    name : process.env.BABY_NAME,
    phone : process.env.BABY_PHONE
}

const twilio = require('twilio');

const client = new twilio(twilioData.sid, twilioData.token);

console.log(twilioData.sid)

client.messages
  .create({
     body: 'Just trying new things, boi',
     from: twilioData.phone,
     to: baby.phone
   })
  .then(message => {
      console.log(message.sid);
});

// const port= process.env.HOST_PORT || 3000;

// app.get('/', function(req, res){

//     res.send('Hello world')
// })

// app.listen(port,function(){
//     console.log('Example app listening on port '+ port)
// })