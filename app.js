
require('dotenv').config();

const db = require('./config/db')

const twilio = {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
    phone: process.env.TWILIO_PHONE
}

const baby = {
    name : process.env.BABY_NAME,
    phone : process.env.BABY_PHONE
}

const client = require('twilio')(twilio.sid,twilio.token);
 

db.query('SELECT texto FROM mensajes WHERE activo=1 ORDER BY ultimavezenviado ASC LIMIT 10', function (error, results, fields) {
  if (error) throw error;
  let randomNumber= Math.floor((Math.random() * 10) + 1) -1;
  console.log(randomNumber)
  console.log('The solution is: ', results[randomNumber]);
});
 
db.end();



// client.messages.create({
//     to: baby.phone,
//     from: twilio.phone,
//     body: 'Que pedo, soy Twilio-chan'
// })
// .then((message)=>{
//     console.log(message.sid);
// });