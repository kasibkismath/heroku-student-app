var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

var navLinks = [
    {
        link: '/students',
        text: 'Students'
    },
    {
        link: '/courses',
        text: 'Courses'
    }
];

var studentRouter = require('./src/routes/studentRoutes')(navLinks);
var courseRouter = require('./src/routes/courseRoutes')(navLinks);

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/students', studentRouter);
app.use('/courses', courseRouter);

app.get('/', function (req, res) {
    res.render('index', {
        nav: navLinks,
        title : 'Home Page'
    });
});

app.listen(port, function (err) {
    console.log('Running app on port : ' + port);
});