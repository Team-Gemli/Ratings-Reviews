const request = require('supertest');
const app = require('./postgreSQL/server');

describe('GET', () => {
  test('GET Reviews', (done) => {
    request(app)
    .get('/Reviews/?product_id=37311')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .expect((res) => {
      res._body[0].product_id = 37311;
    })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done();
    })
  })
  test('GET Meta', (done) => {
    request(app)
    .get('/Reviews/meta/?product_id=37311')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .expect((res) => {
      console.log(res._body);
      res._body.length = 1;
      res._body[0].product_id = 37311;
    })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done();
    })
  })
})