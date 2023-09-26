import pkg from "pg";
const { Pool } = pkg;


// todo: get from process.env
const pool = new Pool({
  user: "postgres",
  host: "localhost",
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
