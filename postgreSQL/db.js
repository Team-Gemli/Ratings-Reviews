require('dotenv').config();
const { Client, Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ratingsandreviews',
  password: process.env.PASSWORD,
  port: 5432
});

pool.connect((err) => {
  if (err) {
    console.log(err, 'Error connecting to the database')
  } else {
    console.log('Connected to database');
  }
});

 pool.query('SELECT * FROM Meta').then(response => {
  console.log(response);
 }).catch(err => {
  console.log(err.stack)
 })


