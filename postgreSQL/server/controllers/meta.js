const {getAll, insert} = require('../models/meta.js');

module.exports = {
  get: function (req, res) {
    let productId = req.query.product_id;
    getAll(productId).then(response => {
      let metaData = {
        product_id: productId,
        ratings: {

        },
        recommend: {

        },
        characteristics: {

        }
      };
      metaData.ratings[1] = response.rows[0][1];
      metaData.ratings[2] = response.rows[0][2];
      metaData.ratings[3] = response.rows[0][3];
      metaData.ratings[4] = response.rows[0][4];
      metaData.ratings[5] = response.rows[0][5];

      metaData.recommend['true'] = response.rows[0]['recommendyes'];
      metaData.recommend['false'] = response.rows[0]['recommendno'];


      metaData.characteristics['width'] = {value: response.rows[0]['width']};
      metaData.characteristics['quality'] = {value: response.rows[0]['quality']};
      metaData.characteristics['fit'] = {value: response.rows[0]['fit']};
      metaData.characteristics['comfort'] = {value: response.rows[0]['comfort']};
      metaData.characteristics['length'] = {value: response.rows[0]['length']};
      metaData.characteristics['size'] = {value: response.rows[0]['size']};

      res.json(metaData);
    }).catch(err => {
      console.log(err, 'An error occured at meta.get');
    })
  },
  post: function (req, res) {

  }
};