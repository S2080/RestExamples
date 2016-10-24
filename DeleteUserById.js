var express = require("express");
var app = express();
var fs = require("fs");


var id = 2;
//create an api call for getting userdetails by id




/**
 * delete user by id
 */
app.get('/deleteUser', function (req, res) {

    fs.readFile('data.json', 'utf8', function (error, data) {
        var users = JSON.parse(data);
        delete users['user' + 2];
        console.log(users);
        res.end(JSON.stringify(users));
    });
});

var server = app.listen(8081, function () {
    var port = server.address().port;
    var host = server.address().address;
    console.log('Listen' + host + "  " + port);
})