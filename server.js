const express = require("express");

require('dotenv').config();

// console.log(process.env)
var API_KEY = process.env.MAPS_API_KEY;
console.log(API_KEY)

const res = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 8080;

const { Pool } = require("pg");

const pool = new Pool({
  database: "servo_app_db",
});

app.use(express.static("public"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello");
});
// Level 1 quest : GET /api/stations/all
app.get("/api/stations/all", (req, res) => {
  let sql = "SELECT * FROM stations;";

  pool.query(sql, (err, dbRes) => {
    // console.log(dbRes);
    res.json(dbRes.rows);
  });
});

app.get("/api/stats", (req, res) => {
  let sql =
    "SELECT owner, count(*) as count FROM stations GROUP BY owner HAVING count(*) > 1 ORDER BY count desc";

  pool.query(sql, (err, dbRes) => {
    res.json(dbRes.rows);
  });
});

app.get("/api/owners", (req, res) => {
  let sql = "SELECT DISTINCT ON (owner) owner FROM stations;";

  pool.query(sql, (err, dbRes) => {
    res.json(dbRes.rows);
  });
});

app.get("/api/stations/random", (req, res) => {
  let randNum = Math.floor(Math.random() * 5234);

  let sql = `SELECT * FROM stations WHERE id = ${randNum} LIMIT 1;`;

  pool.query(sql, (err, dbRes) => {
    res.json(dbRes.rows);
  });
});

app.listen(PORT, () => {
  console.log(`server listening to ${PORT}`);
});
