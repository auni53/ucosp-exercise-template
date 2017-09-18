/*
 * This is an example script for using this library
 */

/*
 * This is only valid in the root of the repository.  This will load the script
 * refered to by the `main` entry in the package.json file
 */
const {fetch} = require('./');

/*
 * We're wrapping the main function in an async method because we otherwise
 * cannot use the await keyword
 */
async function main() {

  /*
   * Note the use of for..of instead of for..in, it's very different
   */
  for (let url of process.argv.slice(2)) {
    console.log(`Fetching ${url}`);
    let result = await fetch(url);
    console.log(`Status Code: ${result.statusCode}`);
    console.log(`Body: ${result.body.toString()}`);
  }
}

/*
 * Call our code
 */
main().catch(err => {
  console.error('An error occured:');
  console.error(err.stack || err);
  process.exit(1);
});
