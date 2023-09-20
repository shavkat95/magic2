import pkg from 'pg';
const { Pool, Client } = pkg;

// const pool = new Pool({
//   user: "postgres",
//   host: "0.0.0.0",
//   database: "postgres",
//   password: "example",
//   port: 5432,
// });

// pool.query("SELECT NOW()").then((t) => {
//   console.log("pool --------------------------------------------------");
//   console.log(t);
// });

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "example",
  port: 5432,
});

client.connect().then(() => {
  client.query("SELECT NOW()").then((t) => {
    console.log("client --------------------------------------------------");
    console.log(t);
    client.end();
  });
});

// console.log(await client.query('SELECT NOW()'))
