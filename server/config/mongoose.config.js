const mongoose = require("mongoose")
const raceDB = "raceDB"


mongoose.connect(`mongodb://localhost/${raceDB}`)
    .then(() =>{
        console.log(`Connected to ${raceDB}`)
    })
    .catch((err) =>{
        console.log(`Error in DB connection ${raceDB}`, err)
    })

