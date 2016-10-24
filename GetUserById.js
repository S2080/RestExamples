var express = require("express");
var app = express();
var fs = require("fs");


var id = 2;
//create an api call for getting userdetails by id

app.get('/:id',function(req,res){

    fs.readFile('data.json','utf8',function(error,data){
        var userDetails = JSON.parse(data);
        var user = userDetails["user" + req.params.id];
        //console.log(JSON.stringify(user));
        if(user === null) {
            throw Error;
        }
        res.end(JSON.stringify(user));
    })
});


var server = app.listen(8081,function(){
    var port = server.address().port;
    var host = server.address().address;
    console.log('Listen' + host + "  " + port);
})