var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var url = require('url');
var  fs = require('fs');
var bodyParser = require('body-parser'); //to read json file
var json = require('json');

var app = express();

app.set('port', process.env.PORT || 3000); //set port
app.set('views', path.join(__dirname, 'views')); //set views directory
app.set('view engine', 'jade'); //set view engine

app.use(bodyParser.json()); //to read json file
app.use(bodyParser.urlencoded({ extended: true })); //to read json file
app.use(express.static(path.join(__dirname, 'public'))); //set public directory

app.get('/', routes.index); //set index page

app.post('/createdb', routes.createdb); //set createdb page
