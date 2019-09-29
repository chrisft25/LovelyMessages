
require('dotenv').config();

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
 

db.query('SELECT texto,idMensaje FROM mensajes WHERE activo=1 ORDER BY ultimavezenviado ASC LIMIT 10', function (error, results, fields) {
  if (error) throw error;
  let randomNumber= Math.floor((Math.random() * config.max_random) + 1) -1;
  console.log(randomNumber)
  let result = results[randomNumber];
  console.log('The solution is: ', );
  client.messages.create({
    to: baby.phone,
    from: twilio.phone,
    body: result.texto
  })
.then((message)=>{
  db.query('INSERT INTO log_messages(idMensaje,phone) VALUES(?,?)',[result.idMensaje,baby.phone], function (error, results, fields) {
    if (error) throw error;    
    
    console.log('Enviado correctamente');
    db.end();
  });
});
});