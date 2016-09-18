var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
})
