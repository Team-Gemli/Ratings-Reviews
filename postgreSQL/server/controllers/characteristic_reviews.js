const {getAll, insert} = require('../models/characteristic_reviews.js');

module.exports = {
  get: function (req, res) {
    getAll().then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err, 'An error occured at characteristic_reviews.get');
    })
  },
  post: function (req, res) {

  }
};