const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const app = express();
require('./auth/facebook')();
app.use(
	cors({
		origin: '*',
		methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
		allowedHeaders: [ 'Content-Type', 'Authorization', 'Accept' ]
	})
);
app.set('PORT', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
module.exports = app;
