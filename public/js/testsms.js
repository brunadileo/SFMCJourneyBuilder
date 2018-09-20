
const accountSid = process.env.accountSid; console.log(accountSid);
const authToken = process.env.authToken; console.log(authToken);
const client = require('twilio')(accountSid, authToken); 

    client.messages.create({
        from: '+17853766431',
        to: '+5521981248459',
        body: "Olar"
        
    }).then(message => console.log(message.sid)) 
    .done();
