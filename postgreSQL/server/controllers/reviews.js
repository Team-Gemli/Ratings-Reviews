const {getAll, insert, incrementHelpfulness, reportReview} = require('../models/reviews.js');

module.exports = {
  get: function (req, res) {
    let productId = req.query.product_id;
    let page = req.query.page;
    let count = req.query.count;
    let sort = req.query.sort;
    getAll(productId, page, count, sort).then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err, 'An error occured at reviews.get');
    })
  },
  post: function (req, res) {
    let newReview = req.body;
    insert(newReview, req, res);
  },
  helpfulness: function (req, res) {
    let reviewId = req.params.review_id;
    incrementHelpfulness(reviewId, req, res);

  },
  report: function (req, res) {
    let reviewId = req.params.review_id;
    console.log(reviewId)
    reportReview(reviewId, req, res);
  }
};