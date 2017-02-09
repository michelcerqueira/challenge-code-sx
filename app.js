/**
 * Created by Michel on 13/10/2016.
 */


var express = require("express");


    var app = express();
app.use(express.static('public'));
    app.get('/', function (req, res) {
        res.sendFile(__dirname + "/public/" + "index.html" );

    });



app.listen(3000, function () {
    console.log("subiu");
})