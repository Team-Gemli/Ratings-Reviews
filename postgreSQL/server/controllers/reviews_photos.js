const {getAll, insert} = require('../models/reviews_photos.js');

module.exports = {
  get: function (req, res) {
    getAll().then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err, 'An error occured at reviews_photos.get');
    })
  },
  post: function (req, res) {

  }
};