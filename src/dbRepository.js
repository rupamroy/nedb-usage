var log = require('./logger');

var Datastore = require('nedb');
var db = new Datastore({filename: 'data/load.db', autoload: true});

module.exports = {
    insert: insert,
    findAll :findAll,
    findByDateTime: findByDateTime
};

function insert(doc, callback) {
    try {
        db.insert(doc, function (err, newDoc) {
            callback(err, newDoc);
        });
    }
    catch (err) {
        log.error(err);
    }
}

function findAll(callback){
    db.find({}, function(err, docs){
        callback(err, docs);
    });
}

function findByDateTime(from, to) {

}