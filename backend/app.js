import pkg from 'pg';
const { Pool, Client } = pkg;

import express from 'express'
const app = express();
const PORT = 5000;

// http://localhost:5000/img1.avif
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


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
