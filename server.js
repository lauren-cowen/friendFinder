var express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
html = require('./routing/htmlRoutes.js'),
f = require('./routing/apiRoutes.js'),
app = express(), PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', html);
app.use('/survey', html);



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

