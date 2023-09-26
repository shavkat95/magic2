import pkg from "pg";
const { Pool, Client } = pkg;


const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "example",
  port: 5432,
});


let command = `DROP TABLE IF EXISTS places;`;

client.connect().then(() => {
  client.query(command).then((t) => {
    console.log("client -----------------------------------------");
    console.log(t);
    console.log("\n----------------------------------------------\n");
    command = `CREATE TABLE places (id serial PRIMARY KEY, name VARCHAR(250) NOT NULL, country VARCHAR(56), \
      images VARCHAR(500), description VARCHAR(2500), lat DECIMAL, lon DECIMAL, author VARCHAR(350), created_at TIMESTAMP DEFAULT NOW(), long_introduction \
      VARCHAR(2500), best_time VARCHAR(2000), things_to_visit VARCHAR(2000), food_must_try VARCHAR(2000), how_to_get_around VARCHAR(2000))`;
    client
      .query(command)
      .then((t) => {
        console.log("client ----------------------------------------------");
        console.log(t);
        console.log("\n----------------------------------------------\n");
      })
      .then(() => {
        // todo: get content

        // todo: for-loop, set variables and query command

        let name = "VARCHAR(150)";
        let country = "VARCHAR(56)";
        let images = "backend/img1.avif";
        let description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.";
        let lat = 69.42;
        let lon = 69.42;
        let author = "VARCHAR(150)";
        let long_introduction = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        let best_time = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        let things_to_visit = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        let food_must_try = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        let how_to_get_around = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

        command = `INSERT INTO places (name, country, images, description, lat, lon, author, long_introduction, best_time, things_to_visit, food_must_try, how_to_get_around)\
              VALUES ('${name}', '${country}', '${images}', '${description}', ${lat}, ${lon}, '${author}', '${long_introduction}', '${best_time}', '${things_to_visit}', '${food_must_try}', '${how_to_get_around}');`;
        console.log("runnning next query ...");
        client.query(command).then((t) => {
          console.log("\n----------------------------------------------\n");
          console.log("command: " + command);
          console.log("\n----------------------------------------------\n");
          console.log(t);
          console.log("\n----------------------------------------------\n");
          client.end();
          console.log("we done");
        });
      });
  });
});
