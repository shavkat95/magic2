import content from "./content.js";
import pool from "./db/server.js";

let command = `DROP TABLE IF EXISTS places;`;

pool.connect().then(async () => {
  await pool.query(command).then(async (t) => {
    console.log("pool -----------------------------------------");
    console.log(t);
    console.log("\n----------------------------------------------\n");
  });

  command = `CREATE TABLE places (id serial PRIMARY KEY, name VARCHAR(250) NOT NULL, country VARCHAR(56), images VARCHAR(500), large_image VARCHAR(500),\
   description VARCHAR(5000), lat DECIMAL, lon DECIMAL, author VARCHAR(350), created_at TIMESTAMP DEFAULT NOW(), ranking VARCHAR(50), long_introduction \
   VARCHAR(10000), best_time VARCHAR(10000), things_to_visit VARCHAR(10000), food_must_try VARCHAR(10000), how_to_get_around VARCHAR(10000))`;

  await pool.query(command).then((t) => {
    console.log("pool ----------------------------------------------");
    console.log(t);
    console.log("\n----------------------------------------------\n");
  });
  let i = 0;
  for (const place of content.items) {
    let name = place.fields.placeName

    let country = place.fields.country

    let images = place.fields.img

    let large_image = place.fields.largeImage

    let description = place.fields.description

    let lat = place.fields.geographicalInfo.lat;
    let lon = place.fields.geographicalInfo.lon;
    let author = place.fields.author

    let ranking = place.fields.ranking;
    let long_introduction = place.fields.longIntroduction

    let best_time = place.fields.bestTimeToGo

    let things_to_visit = place.fields.thingsToVisitRecommended

    let food_must_try = place.fields.foodMustTryRecommended

    let how_to_get_around = place.fields.howToGetAround



    //   'INSERT INTO books (name, author, image_url) VALUES ($1, $2, $3) RETURNING *',
    //   [name, author, image_url]
    // );

    command = `INSERT INTO places (name, country, images, large_image, description, lat, lon, author, ranking, long_introduction, best_time, things_to_visit, food_must_try, how_to_get_around)\
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`;

    console.log("\n----------------------------------------------\n");
    console.log("runnning next query ...");
    console.log("counting: " + i);
    i++;
    console.log("command: " + command);
    console.log("\n----------------------------------------------\n");

    await pool.query(command,  [name, country, images, large_image, description, lat, lon, author, ranking, long_introduction, best_time, things_to_visit, food_must_try, how_to_get_around]).then((t) => {
      console.log("\n----------------------------------------------\n");
      console.log(t);
      console.log("\n----------------------------------------------\n");
    });
  }
  console.log('\ndone\n');
  pool.end();
});
