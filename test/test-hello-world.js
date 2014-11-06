var test = require('tape'),
    req = require('request');

test('hello http', function(t){
    req('http://localhost:3000', function(err, res, body){
      if(err) t.fail(err);
      t.equals(body, 'hi', 'response says hi');
      t.end();
    });
});
