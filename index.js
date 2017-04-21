"use strict";

//libs
let http = require('http');
let morgan = require('morgan');
let express = require('express');
let bodyParser = require('body-parser');

let config = require('./config.js')();
let routes = require('./routes/index')(config);

//server config
let app = express();
app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', routes);

http.createServer(app).listen(app.get('port'), () => {
    console.log('Scouting API server listening on port ' + app.get('port'));
});