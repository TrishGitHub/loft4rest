const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const passport = require('passport');

require('./config/db');

const app = express();
const indexApi = require('./api/routes/index');

app.use(express.static(path.join(__dirname, 'dist')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
	key: 'mySession',
	secret: 'loftschool',
	cookie: {
		path: '/',
		httpOnly: true,
		maxAge: null
	},
	saveUninitialized: false,
	resave: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

require('./config/config-passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "POST, GET, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use('/api', indexApi);
// app.use('/', index);

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

app.listen(5000, () => {
	console.log('server is running on port: 5000');
});