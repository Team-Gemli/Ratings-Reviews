const {pool, connect} = require('../db/db.js');

module.exports = {
  getAll: function (productId, page=1, count=5, sort) {
    let query;
    if (productId !== undefined && sort === undefined) {
      query = `SELECT * FROM Reviews WHERE product_id=${productId} AND reported=false LIMIT ${count} OFFSET ${page}`
    } else {
      query = `SELECT * FROM Reviews WHERE product_id=${productId} AND reported=false LIMIT ${count} OFFSET ${page} ORDER BY ${sort}`
    }
    return pool.query(query).then(response => {
      return response;
     }).catch(err => {
      console.log(err.stack)
     });
  },
  insert: function (req, res) {

  }
};