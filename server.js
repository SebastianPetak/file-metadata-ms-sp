var express = require('express');
var app = express();
var routes = require('./app/routes/index.js');

routes(app);

app.listen(process.env.PORT || 8001)
