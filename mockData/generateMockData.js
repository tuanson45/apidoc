var jsf = require('json-schema-faker');
var schema = require('./schema');
var fs = require('fs');

var json = JSON.stringify(jsf(schema));

fs.writeFile("./api/db.json", json, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Mock data generated.");
    }
});