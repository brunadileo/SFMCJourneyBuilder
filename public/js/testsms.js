
const accountSid = process.env.accountSid; 
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken); 

    client.messages.create({
        from: '+17853766431',
        to: '+5521981248459',
        body: "Olar"
        
    }).then(message => console.log(message.sid)) 
    .done();
