//------ Import mongoose to build a model -----------------------------------------------
const mongoose = require("mongoose");

//------The Schema - The rules that the entries in the DB must follow -------------------
const PlaceSchema = new mongoose.Schema({
    restaurant: {
        type: String,
        required: [true, "Must have a Restaurant Name"],
        minlength: [2, "Must be at least 2 characters long"]
    }
}, { timestamps: true });


//------ Create the Schema --------------------------------------------------------------
const Place = mongoose.model('Place', PlaceSchema);

// ------ Export the model --------------------------------------------------------------
module.exports = Place;
/////////////////////////////////////////////////////////////////////////////////////////