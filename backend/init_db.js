import pkg from "pg";
const { Pool, Client } = pkg;
import content from "./content.js";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "example",
  port: 5432,
});

let command = `DROP TABLE IF EXISTS places;`;

client.connect().then(async () => {
  await client.query(command).then(async (t) => {
    console.log("client -----------------------------------------");
    console.log(t);
    console.log("\n----------------------------------------------\n");
  });

  command = `CREATE TABLE places (id serial PRIMARY KEY, name VARCHAR(250) NOT NULL, country VARCHAR(56), \
      images VARCHAR(500), large_image VARCHAR(500), description VARCHAR(2500), lat DECIMAL, lon DECIMAL, author VARCHAR(350), created_at TIMESTAMP DEFAULT NOW(), ranking DECIMAL, long_introduction \
      VARCHAR(5000), best_time VARCHAR(4000), things_to_visit VARCHAR(4000), food_must_try VARCHAR(4000), how_to_get_around VARCHAR(4000))`;
      
  await client.query(command).then((t) => {
    console.log("client ----------------------------------------------");
    console.log(t);
    console.log("\n----------------------------------------------\n");
  });
  let i = 0;
  for (const place of content.items) {
    let name = place.fields.placeName
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let country = place.fields.country
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let images = place.fields.img
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let large_image = place.fields.largeImage
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let description = place.fields.description
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let lat = place.fields.geographicalInfo.lat;
    let lon = place.fields.geographicalInfo.lon;
    let author = place.fields.author
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let ranking = place.fields.ranking;
    let long_introduction = place.fields.longIntroduction
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let best_time = place.fields.bestTimeToGo
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let things_to_visit = place.fields.thingsToVisitRecommended
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let food_must_try = place.fields.foodMustTryRecommended
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);
    let how_to_get_around = place.fields.howToGetAround
      .replaceAll(`“`, ``)
      .replaceAll(`"`, ``)
      .replaceAll(`”`, ``)
      .replaceAll(`'`, ``);

    command = `INSERT INTO places (name, country, images, large_image, description, lat, lon, author, ranking, long_introduction, best_time, things_to_visit, food_must_try, how_to_get_around)\
              VALUES ('${name}', '${country}', '${images}', '${large_image}', '${description}', ${lat}, ${lon}, '${author}', ${ranking}, '${long_introduction}', '${best_time}', '${things_to_visit}', '${food_must_try}', '${how_to_get_around}');`;

    console.log("\n----------------------------------------------\n");
    console.log("runnning next query ...");
    console.log("counting: " + i);
    i++;
    console.log("command: " + command);
    console.log("\n----------------------------------------------\n");

    await client.query(command).then((t) => {
      console.log("\n----------------------------------------------\n");
      console.log(t);
      console.log("\n----------------------------------------------\n");
    });
  }
  client.end();
});
