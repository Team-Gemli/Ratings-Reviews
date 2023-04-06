const {getAll, insert} = require('../models/characteristics.js');

module.exports = {
  get: function (req, res) {
    getAll().then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err, 'An error occured at characteristics.get');
    })
  },
  post: function (req, res) {

  }
};