const express = require('express');
const router = express.Router();
const reviews = require('./controllers/reviews.js');
const meta = require('./controllers/meta.js');
const path = require('path');

router.get('/reviews/', reviews.get) // done

router.get('/reviews?:product_id&?:page&?:count&?:sort', reviews.get); // done

router.get('/reviews/meta?:product_id', meta.get);
// http:/localhost:3000/Reviews/meta

router.post('/reviews?:product_id', reviews.post); // done

router.put('/reviews/:review_id/helpful', reviews.helpfulness); // done

router.put('/reviews/:review_id/report', reviews.report); //done

router.get(`/${process.env.LOADERIO}`, (req, res) => {
  res.sendFile(path.resolve(__dirname + '/loaderio-5408f80ebe356dd823daafefdd2c5a2b.txt'));
});

module.exports.router = router;
