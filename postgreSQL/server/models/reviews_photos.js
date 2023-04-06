const {pool, connect} = require('../db/db.js');

module.exports = {
  getAll: function () {
    return pool.query('SELECT * FROM Photos WHERE product_id=22297').then(response => {
      return response;
     }).catch(err => {
      console.log(err.stack)
     });
  },
  insert: function (req, res) {

  }
};