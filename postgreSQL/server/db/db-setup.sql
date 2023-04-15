
-- CREATE TABLE IF NOT EXISTS Product (
--   product_id SERIAL PRIMARY KEY
-- );

CREATE TABLE IF NOT EXISTS Reviews (
  review_id SERIAL PRIMARY KEY NOT NULL,
  product_id int,
  rating int,
  datet timestamp,
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

CREATE TABLE IF NOT EXISTS Recommended (
  recommended_id SERIAL PRIMARY KEY,
  isRecommended boolean,
  product_id int
);

CREATE TABLE IF NOT EXISTS Characteristics (
  characteristic_id SERIAL PRIMARY KEY,
  product_id int,
  name varchar(50)
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

CREATE TABLE IF NOT EXISTS Meta (
  product_id SERIAL PRIMARY KEY,
  characteristic varchar(30),
  "1" int,
  "2" int,
  "3" int,
  "4" int,
  "5" int,
  recommendYes int,
  recommendNo int,
  width text,
  quality text,
  fit text,
  comfort text,
  length text,
  size text
);

-- CREATE TABLE IF NOT EXISTS Temp (
--   product_id SERIAL PRIMARY KEY,
--   name text,
--   slogan text,
--   description text,
--   category text,
--   price int
-- )

-- COPY Temp(product_id, name, slogan, description, category, price) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/product.csv' DELIMITER ',' CSV HEADER;
-- COPY Meta(product_id, characteristic, 1, 2, 3, 4, 5, recommendYes, recommendNo, width, quality, fit, comfort, length, size) DELIMITER ',' CSV HEADER;
-- COPY Reviews (review_id, product_id, rating, datet, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM 'files/reviews.csv' DELIMITER ',' CSV HEADER;
\copy Reviews (review_id, product_id, rating, datet, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM 'files/reviews.csv' DELIMITER ',' CSV HEADER;
\copy Meta(product_id, characteristic, '1', '2', '3', '4', '5', recommendYes, recommendNo, width, quality, fit, comfort, length, size) FROM 'files/meta.csv' DELIMITER ',' CSV HEADER;

-- UPDATE Meta SET product_id=Reviews.product_id;
-- SELECT product_id, COUNT(*) FROM Reviews WHERE rating=5 GROUP BY product_id;

-- COPY Product(product_id) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/reviews.csv' DELIMITER ',' CSV HEADER;

-- COPY Reviews(review_id, product_id, rating, datet, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/reviews.csv' DELIMITER ',' CSV HEADER;

-- COPY Characteristic_reviews(id, characteristic_id, review_id, value) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

-- COPY Characteristics(characteristic_id, product_id, name) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/characteristics.csv' DELIMITER ',' CSV HEADER;

-- COPY Photos(id, review_id, photo_url) FROM '/home/sljivo/hackreactor/sdc/Ratings-Reviews-Gemli-SDC/files/reviews_photos.csv' DELIMITER ',' CSV HEADER;

--Run to update rating count to correct values if ever out of sync
-- UPDATE Meta m                                                                                                SET one = r.count_3_ratings                                                                                            FROM (                                                                                                                    SELECT product_id, COUNT(*) AS count_3_ratings                                                                          FROM Reviews                                                                                                            WHERE rating = 1                                                                                                        GROUP BY product_id                                                                                                   ) r                                                                                                                     WHERE m.product_id = r.product_id;

-- query for getting total characteristic values per product_id
-- UPDATE meta                                                                                                  SET size = c.total_value                                                                                             FROM (                                                                                                                    SELECT c.name, c.product_id, SUM(cr.value) AS total_value                                                    FROM characteristics c                                                                                                  INNER JOIN characteristic_reviews cr                                                                                    ON c.characteristic_id = cr.characteristic_id                                                                           GROUP BY c.name, c.product_id                                                                                                    ) c                                                                                                                     WHERE meta.product_id = c.product_id;

-- Set id to max of table ids
-- SELECT setval(pg_get_serial_sequence('Reviews', 'id'), (SELECT MAX(id) FROM Reviews));