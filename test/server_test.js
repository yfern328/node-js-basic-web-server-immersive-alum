const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const http = require('http');

const server = require('../server');
const baseUrl = 'http://localhost:3000';

describe('server', () => {

  before(() => {
    server.listen(3000);
  });

  it('should return 200', (done) => {
    http.get(baseUrl, (response) => {
      response.statusCode.should.equal(200);
      done();
    });
  });

  it('GET request to / responds with "Hello, World!"', (done) => {
    http.get(baseUrl, (response) => {
      var data = '';

      // Check status.
      response.statusCode.should.equal(200);

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        console.log({data:data});
        data.should.equal("Hello, World!");
        done();
      });
 
    });
  });

  after(() => {
    server.close();
  });

});
