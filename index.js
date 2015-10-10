var express = require('express');

var PORT = 8000;

var app = express();
app.get('/', function (req, res) {
  res.send('Something went right!\n');
});


app.listen(PORT);
console.log('Running on port ' + PORT);
