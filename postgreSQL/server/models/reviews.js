const {pool, connect} = require('../db/db.js');

module.exports = {
  getAll: function (productId, page=1, count=5, sort) {
    // minus 1 * 2
    const offset = (page - 1) * count;
    let query;
    if (productId !== undefined && sort === undefined) {
      query = `SELECT * FROM Reviews WHERE product_id=${productId} AND reported=false LIMIT ${count} OFFSET ${offset}`
    } else if (product_id !== undefined && sort !== undefined) {
      query = `SELECT * FROM Reviews WHERE product_id=${productId} AND reported=false LIMIT ${count} OFFSET ${offset} ORDER BY ${sort}`
    } else {
      return 'Please include a product_id';
    }
    return pool.query(query).then(response => {
      return response.rows;
     }).catch(err => {
      console.log(err.stack)
     });
  },
  insert: function (review, req, res) {
    console.log(review)
    review.product_id = req.query.product_id;
    review.datet = new Date().toString();
    review.reported = false;
    review.helpfulness = 0;
    review.response = null;
    console.log(review);
    let query = `INSERT INTO Reviews (product_id, rating, datet, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING review_id`;

    pool.query(query, [review.product_id, review.rating, review.datet, review.summary, review.body, review.recommend, review.reported, review.reviewer_name, review.reviewer_email, review.response, review.helpfulness]).then(response => {
      console.log(response.rows[0]);
      res.send('Review inserted succussfully')
    }).catch(err => {
      console.log(err, 'An error occured during insert');
      res.status(500).send('Error inserting review');
    })
  },
  incrementHelpfulness: function (reviewId, req, res) {
    let query = `UPDATE Reviews SET helpfulness=helpfulness + 1 WHERE review_id=${reviewId}`;

    pool.query(query).then(() => {
      res.send('Helpfulness incremented by 1 successfully');
    }).catch((err) => {
      res.status(500).send('Error incrementing helpfulness');
    });
  },
  reportReview: function (reviewId, req, res) {
    let query = `UPDATE Reviews SET reported=true WHERE review_id=${reviewId}`;

    pool.query(query).then(() => {
      res.send('Review successfully reported');
    }).catch((err) => {
      res.send('Failed to report review');
    });
  }
};