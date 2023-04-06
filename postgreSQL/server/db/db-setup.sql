
-- CREATE TABLE IF NOT EXISTS Product (
--   product_id SERIAL PRIMARY KEY
-- );

CREATE TABLE IF NOT EXISTS Reviews (
  review_id SERIAL PRIMARY KEY NOT NULL,
  product_id int,
  rating int,
  datet bigint,
  summary varchar(255),
  body varchar(1000),
  recommend BOOLEAN,
  reported BOOLEAN DEFAULT false,
  reviewer_name varchar(50),
  reviewer_email varchar(50),
  response varchar(1000),
  helpfulness int
);

CREATE TABLE IF NOT EXISTS Photos (
  id SERIAL PRIMARY KEY,
  photo_url VARCHAR(1000),
  review_id int references Reviews(review_id)
);

-- CREATE TABLE IF NOT EXISTS Meta (
--   id SERIAL PRIMARY KEY,
--   avgRatings int,
--   recommendedOverall BOOLEAN,
--   avgSize int,
--   avgComfort int,
--   avgWidth int,
--   product_id int references Product(id)
-- );

CREATE TABLE IF NOT EXISTS Recommended (
  recommended_id SERIAL PRIMARY KEY,
  isRecommended boolean,
  product_id int
);

CREATE TABLE IF NOT EXISTS Characteristics (
  characteristic_id SERIAL PRIMARY KEY,
  product_id int,
  name varchar(50),
);

CREATE TABLE IF NOT EXISTS Characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id int references Characteristics(characteristic_id),
  review_id int references Reviews(review_id),
  value int
);

CREATE TABLE IF NOT EXISTS Ratings (
  id SERIAL PRIMARY KEY,
  rating int,
  review_id int references Reviews(review_id),
  product_id int
);

-- COPY Product(product_id) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/reviews.csv' DELIMITER ',' CSV HEADER;

-- COPY Reviews(review_id, product_id, rating, datet, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/reviews.csv' DELIMITER ',' CSV HEADER;

-- COPY Characteristic_reviews(id, characteristic_id, review_id, value) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

-- COPY Characteristics(characteristic_id, product_id, name) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/characteristics.csv' DELIMITER ',' CSV HEADER;

-- COPY Photos(id, review_id, photo_url) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/reviews_photos.csv' DELIMITER ',' CSV HEADER;

