//------ Import the Controller ----------------------------------------------------------
const Place = require("../controllers/places.controller");

module.exports = (app) => {
    app.get("/api/places", Place.findAll)
    app.post("/api/places", Place.create)
    app.get("/api/places/random", Place.findRandomPlace)
    app.get("/api/places/:id", Place.findOne)
    app.put("/api/places/:id", Place.update)
    app.delete("/api/places/:id", Place.delete)
}