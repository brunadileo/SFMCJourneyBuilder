const express = require('express');
const app = new express();

app.use(express.static(__dirname + '/public'));
app.use('/js',express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname +'/index.html');
});
app.listen(3000);

console.log("Running at Port 3000");
