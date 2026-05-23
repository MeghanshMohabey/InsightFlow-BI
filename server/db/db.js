const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Meghansh@123",
  database: "insightflow",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log("PostgreSQL connection error:", err);
  } else {
    console.log("PostgreSQL Connected");
  }
});

module.exports = pool;