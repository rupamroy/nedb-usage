var app, config, serveStatic;
var repo = require('./dbRepository');
var log = require('./logger');
var express = require('express');
var bodyParser = require('body-parser');

app = express();
serveStatic = require('serve-static');

config = require('./config');
app.use(serveStatic(config.bowerPath));
app.use(serveStatic(config.rootPath + "/client"));

app.listen(process.env.PORT || 3000);
console.log("Listening on http://localhost:" + (process.env.PORT || '3000'));


app.get('/index', function (req, res) {
    repo.findAll(function (err, docs) {
        res.send(docs);
    });
});

// parse application/json
app.use(bodyParser.json());

app.post('/find', function (req, res) {
    var from = new Date(req.body.fromTime);
    var to = new Date(req.body.toTime);

    repo.findByDateTime(from, to, function (err, docs) {
        if (err) {
            log.error(err);
            return;
        }

        res.send(docs);

    });
});


