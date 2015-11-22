var app, config, serveStatic;
var repo = require('./dbRepository');
var log = require('./logger');

var express = require('express');
app = express();
serveStatic = require('serve-static');


config = require('./config');
app.use(serveStatic(config.bowerPath));
app.use(serveStatic(config.rootPath + "/client"));

app.listen(process.env.PORT || 3000);
console.log("Listening on http://localhost:" + (process.env.PORT || '3000'));


app.get('/index', function(req, res, next){
    repo.findAll(function(err, docs){
     res.send(docs);
     });
});


/*repo.findAll(function(err, docs){
 console.log(docs);
 });*/

repo.findByDateTime(new Date('2015-11-22T00:00:00.000Z'),
    new Date('2015-11-22T24:00:00.000Z'),
    function (err, docs) {
        if (err) {
            log.error(err);
            return;
        }

        console.log(docs);

    });

