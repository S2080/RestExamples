
/**
 * Load express  module 
 */
var express = require('express');

/**
 * Instantiation of express
 */
var app = express();

/**
 * Get request
 */
app.get('/', function(req,res) {
    res.json({message: 'Welcome to API'});
});

app.get('/test', function(req,res) {
    res.json({message: 'Welcome to API test'});
});

app.listen(process.env.port || 8888);

