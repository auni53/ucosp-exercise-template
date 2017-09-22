const http = require('http');
const https = require('https');
const parse = require('url').parse;

/*
 * Placeholder for your function.  This function should return (i.e. resolve)
 * with a value in the shape {statusCode, body} where status code is an integer
 * number and the body is a single Buffer instance which stores the complete
 * body as raw bytes.  All errors in the http library should be thrown (i.e.
 * rejected).  Since http(s).request() are not promises, you'll need to create
 * your own Promise instance
 */
async function fetch ({url}) {
  return new Promise((resolve, reject) => {

    let get;
    const protocol = parse(url).protocol;
    if (protocol == 'http:') {
      get = http.get;
    } else if (protocol == 'https:') {
      get = https.get;
    } else {
      reject(new Error('Invalid protocol'));
    }

    get(url, (res) => {
      data = [];

      res.on('data', (d) => data.push(d));

      res.on('end', () => resolve({
          statusCode: res.statusCode,
          body: Buffer.concat(data),
        })
      );
    });
  });
}

module.exports = {fetch};
