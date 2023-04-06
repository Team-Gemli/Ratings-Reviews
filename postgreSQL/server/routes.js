const express = require('express');
const router = express.Router();
const reviews = require('./controllers/reviews.js');
const meta = require('./controllers/meta.js');

router.get('/reviews/', reviews.get)

router.get('/reviews?:product_id&?:page&?:count&?:sort', reviews.get);

router.get('/reviews/meta', meta.get);

router.post('/reviews/', reviews.post);

router.put('/reviews/:review_id/helpful',reviews.helpfulness)

router.put('/reviews/:review_id/report',reviews.report)

module.exports.router = router;
