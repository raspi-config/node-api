const app = require('express')();

/* Environment */
require('dotenv').load();

/* Middlewares */
require('./http/middlewares/middlewares')(app);

/* Routes */
app.use('/api/v1', require('./http/routes'));

module.exports = app;
