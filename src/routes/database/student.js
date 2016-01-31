var mongoose = require('mongoose');
var dbConfig = require('../../config/database.json');

var studentDatabase = function () {

    // connect to mongodb
    var conn = mongoose.createConnection(dbConfig.dbUrl);

    // schema definition
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;


    var StudentSchema = new Schema({
        firstName: String,
        lastName: String,
        age: Number,
        gender: String,
        course: String,
        contactNo: String
    });

    // function constructor
    var Student = conn.model('Student', StudentSchema);
    var stud = new Student;
    
    return Student;
};

module.exports = studentDatabase;