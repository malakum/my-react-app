const db = require("./connection.js");
const format = require('pg-format');
const parksData = require('./data/parks.js')
const ridesData =require('./data/rides.js');
const parks = require("./data/parks.js");
const rides = require("./data/rides.js");

function seed({ parks, rides, stalls }) {
  return db
    .query("DROP TABLE IF EXISTS rides;")
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls_foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS parks;");
    })
    .then(() => {
      return createParks();
    })
    .then(() => {
      return createRides();
    });
}

function createParks() {
  return db.query(`
  CREATE TABLE parks(
                    park_id SERIAL PRIMARY KEY,
                    park_name VARCHAR(40)  NOT NULL,
                    year_opened INTEGER NOT NULL,
                    annual_attendance INTEGER NOT NULL
                    );
`).then (() => {
  const formatedData = parksData.map((data) => {
    return [data.park_name, data.year_opened, data.annual_attendance]
  }) 
  const insertParksDatas = format(`INSERT INTO parks
  (park_name, year_opened, annual_attendance)
  VALUES %L RETURNING *`,
  formatedData
);
return db.query(insertParksDatas)
}).then((result) => {
   console.log(result.rows);
})
};


