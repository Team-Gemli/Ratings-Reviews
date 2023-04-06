const {getAll, insert} = require('../models/reviews.js');

module.exports = {
  get: function (req, res) {
    let productId = req.query.product_id;
    let page = req.query.page;
    let count = req.query.count;
    let sort = req.query.sort;
    console.log(page, count, sort)
    getAll(productId, page, count, sort).then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err, 'An error occured at reviews.get');
    })
  },
  post: function (req, res) {

  },
  helpfulness: function (req, res) {

  },
  report: function (req, res) {

  }
};