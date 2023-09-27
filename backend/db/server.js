import pkg from "pg";
const { Pool } = pkg;


// todo: get from process.env
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "example",
  port: 5432,
});

pool.connect((err)=>{
    if(err){
        console.error(err);
    } else {
        console.log('connected to postgreSQL');
    }
});

export default pool;
