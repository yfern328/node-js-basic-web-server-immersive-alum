const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const request = require('supertest');

const server = require('../server');
const baseUrl = 'http://localhost:3000';

describe('server', () => {

  before(() => {
    server.listen(3000);
  });

  it('GET request to / responds with "Hello, World!"', (done) => {
    request(baseUrl)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((error, response) => {
        if (error) {
          done(error);
          return;
        }
        response.text.should.equal("Hello, World!");
        done();
      });
    });

    });
  });

  after(() => {
    server.close();
  });

});
