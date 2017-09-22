const assume = require('assume');
const subject = require('../');

describe('URL Fetcher', () => {
  it('should fetch an https url', async () => {
    let result = await subject.fetch({url: 'https://httpbin.org/get'});
    assume(result).has.property('statusCode', 200);
    assume(result).has.property('body');
    assume(result.body).to.be.a('Buffer');
    // Since we're expecting JSON, let's make sure it parses
    JSON.parse(result.body);
  });

  it('should fetch an http url', async () => {
    let result = await subject.fetch({url: 'http://httpbin.org/get'});
    assume(result).has.property('statusCode', 200);
    assume(result).has.property('body');
    assume(result.body).to.be.a('Buffer');
    JSON.parse(result.body);
  });

  it('should fail to fetch on an unsupported protocol', async () => {
    try {
      let result = await subject.fetch({url: 'ftp://httpbin.org/get'});
      return Promise.reject(new Error());
    } catch(e) { }
  });

});
