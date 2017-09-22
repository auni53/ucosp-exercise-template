const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'testing',
  database: 'testing',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000,
});

const DROP_QUERY = `DROP TABLE IF EXISTS Test`

const CREATE_QUERY = `CREATE TABLE Test (id int)`;

const INSERT_QUERY = `INSERT INTO Test(id)
  VALUES (${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].join('), (')})`;

console.log(INSERT_QUERY);

const SELECT_QUERY = `SELECT * FROM Test WHERE id = 5`;

const DELETE_QUERY = `DELETE FROM Test`;

(async function() {
  const client = await pool.connect();

  let result;
  result = await client.query(DROP_QUERY);
  result = await client.query(CREATE_QUERY);
  result = await client.query(INSERT_QUERY);
  result = await client.query(SELECT_QUERY);
  console.log(result.rows);
  result = await client.query(DELETE_QUERY);

  client.release()
})()
