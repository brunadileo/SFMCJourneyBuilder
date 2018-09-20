
const accountSid = process.env.ACCOUNTSID; console.log(accountSid);
const authToken = process.env.AUTHTOKEN; console.log(authToken);

const client = require('twilio')(accountSid, authToken); 

    client.messages.create({
        from: '+17853766431',
        to: '+5521981248459',
        body: "You just sent an SMS from Node.js using Twilio!"
        
    }).then(message => console.log(message.sid)) 
    .done();
