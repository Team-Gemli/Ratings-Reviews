require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);

app.get('/', (res, req) => {

});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

