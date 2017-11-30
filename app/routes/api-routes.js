// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    var dbQuery = "SELECT * FROM markers";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Markers Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO 'markers' ('id', 'name', 'address', 'lat', 'lng', 'type') VALUES (?,?,?,?,?,?)";

    connection.query(dbQuery, [req.body.id, req.body.name, req.body.address, req.body.lat, req.body.lng, req.body.type], function(err, result) {
      console.log("Chirp Successfully Saved!");
      res.end();
    });

  });

};
