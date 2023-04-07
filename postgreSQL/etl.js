const fs = require('fs');
const { parse } = require('csv-parse');

// files: characteristics_reviews, reviews, reviews_photos, characteristics
// transforms data to array of objects. Useful for restructuring CSV files later.

const reviews = [];
fs.createReadStream('files/reviews.csv')
.pipe(
  parse({
    delimiter: ',',
    columns: true,
    ltrim: true,
  })
)
.on('data', function (row) {
  reviews.push(row);
})
.on('error', function (error) {
  console.log(error.message);
})
.on('end', function () {
  console.log(reviews);
});

const characteristics = [];
fs.createReadStream('files/characteristics.csv')
.pipe(
  parse({
    delimiter: ',',
    columns: true,
    ltrim: true,
  })
)
.on('data', function (row) {
  characteristics.push(row);
})
.on('error', function (error) {
  console.log(error.message);
})
.on('end', function () {
  console.log(characteristics);
});

const characteristic_reviews = [];
fs.createReadStream('files/characteristic_reviews.csv')
.pipe(
  parse({
    delimiter: ',',
    columns: true,
    ltrim: true,
  })
)
.on('data', function (row) {
  characteristic_reviews.push(row);
})
.on('error', function (error) {
  console.log(error.message);
})
.on('end', function () {
  console.log(characteristic_reviews);
});

const reviews_photos = [];
fs.createReadStream('files/reviews_photos.csv')
.pipe(
  parse({
    delimiter: ',',
    columns: true,
    ltrim: true,
  })
)
.on('data', function (row) {
  reviews_photos.push(row);
})
.on('error', function (error) {
  console.log(error.message);
})
.on('end', function () {
  console.log(reviews_photos.length);
});



