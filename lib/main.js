
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
    /**************************************************/
    /*                                                */
    /*  Here is where you should be fetching the URL  */
    /*                                                */
    /**************************************************/
    return resolve({
      statusCode: 200,
      body: Buffer.from('{"Property": "Value"}'),
    });
  });
}

module.exports = {fetch};
