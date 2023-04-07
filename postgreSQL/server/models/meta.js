const {pool, connect} = require('../db/db.js');

module.exports = {
  getAll: function (productId) {
    return pool.query(`SELECT * FROM Meta WHERE product_id=${productId}`).then(response => {
      return response;
     }).catch(err => {
      console.log(err.stack)
     });
  },
  insert: function (req, res) {

  }
};