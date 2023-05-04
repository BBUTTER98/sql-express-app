const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
let carString = ""
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "samochody"
});
app.get("/",(req,res)=>{
  database.connect(function(err) {
    if (err) throw err;
    database.query("SELECT * from samochody", function (err, result) {
      if (err) throw err;
      result.forEach(car => {
        carString += car.marka+" "
      });
    });
  });
  res.send(carString);
})
database.connect(function(err) {
    if (err) throw err;
    database.query("SELECT * from samochody", function (err, result) {
      if (err) throw err;
      result.forEach(car => {
        carString += car.marka+" "
      });
    });
  });
app.listen(3000,function(){
    console.log("server listening on port 3000");
});