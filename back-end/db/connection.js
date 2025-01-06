const { Pool } = require("pg");

if (!process.env.PGDATABASE) {
  console.log(process.env.PGDATABASE);
 throw new Error("No PGDATABASE configured");
}

module.exports = new Pool();
