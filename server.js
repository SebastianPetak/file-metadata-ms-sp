var express = require('express');
var app = express();
var path = require('path');
var routes = require('./app/routes/index.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

routes(app);

app.listen(process.env.PORT || 8001)
