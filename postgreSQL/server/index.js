require('dotenv').config();
const express = require('express');
const db = require('./db/db.js');
const morgan = require('morgan');
const app = express();
const {getAll} = require('./models/reviews.js')
const {router} = require('./routes.js');

app.use(morgan('dev'));
app.use(express.json());

app.use('/', router);

// app.get('/', (req, res) => {
//   getAll(req, res);
// });

module.exports = app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

