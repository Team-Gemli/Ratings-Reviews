const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://127.0.0.1:27017/ratingsReviews`);

const ratingsReviewSchema = mongoose.Schema({
  id: Number,
  rating: Number,
  summary: String,
  recommended: Boolean,
  body: String,
  date: Date,
  reviewerName: String,
  helpfulness: Number,
  productId: Number
});

const metaDataSchema = mongoose.Schema({
  ratings: {
  One: Number,
  Two: Number,
  Three: Number,
  Four: Number,
  Five: Number
},
recommended: {
  yes: Boolean,
  no: Boolean
},
characteristics: {
  length: Number,
  quality: Number,
  comfort: Number,
  fit: Number
}})

const Review = mongoose.model('Review', ratingsReviewSchema);

const metaData = mongoose.model('ProductMetaData', metaDataSchema);

module.exports.Review = Review;