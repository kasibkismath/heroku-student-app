var mongoose = require('mongoose');
var dbConfig = require('../../config/database.json');
var courseDatabase = function () {

    // connect to mongodb
    var conn = mongoose.createConnection(dbConfig.dbUrl);

    // schema definition
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;


    var CourseSchema = new Schema({
        courseName: String,
        credits: Number,
        years: Number,
        department: String,
        coordinator: String,
    });

    // function constructor
    var Course = conn.model('Course', CourseSchema);
    var cour = new Course;
    
    return Course;
};

module.exports = courseDatabase;