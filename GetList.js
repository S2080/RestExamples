var express = require("express");
var app = express();
var fs = require("fs")

var newUser = {
    "user3": {
        "id": "3",
        "name": "Kumbhar"
    },
    "user4" : {
        "id" : "4",
        "name" : "Ajit"
    }

}

app.get('/listUsers', function (req, res) {
    fs.readFile('data.json', 'utf8', function (error, data) {
        console.log(data);
        res.end();
    })
});


app.get('/addUser', function(req,res){

    // readFile from folder and add new user into list
    fs.readFile('data.json','utf8', function(error,data){
       data = JSON.parse(data);
       data["user3"] = newUser["user3"];
       data["user4"] = newUser["user4"];
       console.log(data);
       res.end(JSON.stringify(data));
    })
});

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example Host and Port is listen on ' + host + "  " + port);
})

