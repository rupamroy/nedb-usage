var repo = require('./dbRepository');

/*
for (var i = 0; i < 10; i++) {
    var doc = {
        uid: i,
        time: new Date()
    };
    repo.insert(doc, function (err, newDoc) {
        console.log("Document with id : " + newDoc._id);
    });
}*/


repo.findAll(function(err, docs){
    console.log(docs);
});