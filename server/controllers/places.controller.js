//------ Controller is for CRUD ---------------------------------------------------------
//------ Import the MODEL to use Queries ------------------------------------------------
const Place = require("../model/places.model");

//------ The way below exports as a whole Object and Each Key has a value as a Function -
module.exports = {

    //------ Read all ------
    findAll: (req, res) => {
        Place.find()
            .then( (places) => {
                // whatever we choose to come back to the client, the client has to accept here
                console.log(places);
                return res.json(places)
            })
            .catch(err => res.json(err))
    },

    //------ Create --------
    create: (req, res) => {
        // Pass in body data
        console.log(req.body);
        Place.create(req.body)
            .then( (newPlace) => {
                console.log("DB success, new Restaurant added");
                return res.json(newPlace)
            })
            .catch(err => {
                console.log("DB ERROR create new Restaurant FAILED");
                return res.status(400).json(err)
            })
    },

    // ------ Read one -----
    findOne: (req, res) => {
        console.log(req.params);
        Place.findById(req.params.id)
            .then(place => res.json(place))
            .catch(err => res.json(err))

    },

    // ------ Update -------
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("UPDATE OBJ:", req.body);
        Place.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedPlace => res.json(updatedPlace))
            .catch(err => {
                console.log("DB ERROR Updated new Restaurant FAILED");
                return res.status(400).json(err)
            })
    },

    // ------ Delete -------
    delete: (req, res) => {
        console.log(req.params.id);
        Place.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },

    // ------ Random -------
    findRandomPlace: (req, res) => {
        Place.find()
        .then(allDaPlaces => {
            console.log(allDaPlaces);
            let randomInt = Math.floor(Math.random() * allDaPlaces.length);
            return res.json(allDaPlaces[randomInt]);
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }

}
