require('dotenv').config();
const { Client, Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PSQLPORT,
  max: 300
});

pool.connect((err) => {
  if (err) {
    console.log(err, 'Error connecting to the database')
  } else {
    //console.log('Connected to database');
  }
});

module.exports.pool = pool;


