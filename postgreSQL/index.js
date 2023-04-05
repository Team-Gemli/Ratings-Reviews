require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (res, req) => {

});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

