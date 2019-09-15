
require('dotenv').config();

const db = require('./config/db');

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
//     body: 'Hola, me llamo Pixel!, soy un bot creado por Chris que te enviara mensajes al azar durante el dia recordandote lo genial que eres :D'
// })
// .then((message)=>{
//     console.log(message.sid);
// });

// client.messages.create({
//   to: baby.phone,
//   from: twilio.phone,
//   body: 'Tambien te contare chistes o cosas random de vez en cuando (no te asustes) para subirte el animo :3'
// })
// .then((message)=>{
//   console.log(message.sid);
// });

// client.messages.create({
//   to: baby.phone,
//   from: twilio.phone,
//   body: 'Sometimes, I will text you on English, because Chris knows you love this language'
// })
// .then((message)=>{
//   console.log(message.sid);
// });


// client.messages.create({
//   to: baby.phone,
//   from: twilio.phone,
//   body: 'Si ves algun mensaje raro, es culpa de Chris, el esta llenando mi base de datos :)'
// })
// .then((message)=>{
//   console.log(message.sid);
// });


// client.messages.create({
//   to: baby.phone,
//   from: twilio.phone,
//   body: 'Espero conocerte pronto, y que sea una bonita experiencia! :D'
// })
// .then((message)=>{
//   console.log(message.sid);
// });

// client.messages.create({
//   to: '+50377419727',
//   from: twilio.phone,
//   body: 'Espero conocerte pronto, y que sea una bonita experiencia! :D'
// })
// .then((message)=>{
//   console.log(message.sid);
// });