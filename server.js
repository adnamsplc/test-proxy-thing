var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.end('hi')
})

app.listen(port, function(){
    console.log('Listening on http://localhost:' + port);
})
