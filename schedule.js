const { exec } = require('child_process');
require('dotenv').config();

const config = {
    max_messages : process.env.NUMBER_MESSAGES,
    max_hour : process.env.MAX_HOUR
}

//Calculate the amount of hours per section.
let split = Math.round(config.max_hour/config.max_messages)

//Let's start at 1AM
let start = 1;

//We will increase "start" by "split"
while(start<config.max_hour){

    //We calculate the max of the section of hours. We sustract 1, because we started in hour 1.

    let max_section = start+split -1

    //If max_section is greater than the max time we defined before, we will decrease split so we can end exactly in the max time.

    if(max_section>config.max_hour){
        split=config.max_hour-start
    }

    //We show the limits

    console.log(`Limite de: ${start}-${max_section}`)

    //We calculate the random hour between the section and a random minute between 1 and 59.

    let randomHour = Math.floor(Math.random() * (max_section - start + 1) + start);
    let randomMinute = Math.floor((Math.random() * 59) + 1) -1;

    //If the random minute is lower than 10, we add a zero at the beginning, so it maintains the "XX" format.

    if(randomMinute<10){
        randomMinute= "0" + randomMinute
    }
    
    console.log(randomHour + ":" + randomMinute)

    //We execute an at command in linux, so we can schedule the script randomly.
    
    exec(`echo "/usr/bin/node /home/lovely/app.js" | at ${randomHour}:${randomMinute}`,(err,stdout,stderr)=>{
        if(err){
            console.error(err)
        }else{
            console.log(stdout);
        }
    });
    start+=split
}



