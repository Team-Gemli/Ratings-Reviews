const {getAll, insert} = require('../models/meta.js');

module.exports = {
  get: function (req, res) {
    getAll().then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err, 'An error occured at meta.get');
    })
  },
  post: function (req, res) {

  }
};