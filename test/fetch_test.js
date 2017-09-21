const assume = require('assume');
const subject = require('../');

describe('URL Fetcher', () => {
  it('should fetch a url', async () => {
    let result = await subject.fetch({url: 'https://httpbin.org/get'});
    assume(result).has.property('statusCode', 200);
    assume(result).has.property('body');
    assume(result.body).to.be.a('Buffer');
    // Since we're expecting JSON, let's make sure it parses
    JSON.parse(result.body);
  });
});
