
const accountSid = 'AC0cafaf71a4aca7572267a2bf6ad21e86'; 
const authToken = '7ac4967d8a2965be14ce6934e3f8a877';
const client = require('twilio')(accountSid, authToken); 

    client.messages.create({
        from: '+17853766431',
        to: '+5521981248459',
        body: "You just sent an SMS from Node.js using Twilio!"
        
    }).then(message => console.log(message.sid)) 
    .done();
