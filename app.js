
require('dotenv').config();
const math = require('./helpers/math_functions')
const db = require('./config/db');


const config = {
  max_random : process.env.CONFIG_MAX_RANDOM
}

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
 

db.query(`SELECT idMensaje,texto FROM mensajes WHERE activo=1 ORDER BY ultimavezenviado ASC LIMIT ${config.max_random}`, function (error, results, fields) {

  if (error){console.error(error)};
  let randomNumber= math.randomNumber(config.max_random);
  console.log(randomNumber)
  let result = results[randomNumber];
  console.log('Text to send: ', result.texto );

  client.messages.create({
    to: baby.phone,
    from: twilio.phone,
    body: result.texto
  })
.then((message)=>{

  db.query('INSERT INTO log_messages(idMensaje,phone) VALUES(?,?)',[result.idMensaje,baby.phone], function (error, results, fields) {
    if (error){console.error(error)};  
    console.log('SMS sent successfully');
    db.end();
  });

});
});