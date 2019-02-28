var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var User = mongoose.model('User2', schema, 'users2');

var user = new User({
    name: 'John Smith',
    email: 'john@smith.io'
});

user.save(function (error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved !");
    process.exit(0);
});