const app = require('express')();

/* Environment */
require('dotenv').load();

/* Middlewares */
require('./http/middlewares')(app);

/* Routes */
app.use('/api/v1', require('./routes'));

module.exports = app;
