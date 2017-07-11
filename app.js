var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
var appRoutes = require('./routes/app');
var apiRoutes = require('./routes/api');
var mongoose = require('mongoose');
var config = require('./config');

var app = express();

// Port Number
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', appRoutes);
app.use('/api', apiRoutes);

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

// mongoose connection
//mongoose.connect(config.getDbConnectionString()); // uncomment this line to get connection to mongodb , please specify your url and credentials in /config folder

module.exports = app;
