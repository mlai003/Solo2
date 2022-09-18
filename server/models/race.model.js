const mongoose = require("mongoose");

const RaceSchema = mongoose.Schema({
    eventName: {
        type: String,
        required:[true, "Event name is required"], 
        maxlength:[40, "The title cannot exceed 40 chracters"],
        minlength:[2, "The title must be at least 2 characters"],
    },
    address:{
        type:String,
        required:[true, "Please provide the address of the event"]
    },
    date:{
        type: Date,
        required:[true, "Please enter date for event"],
        
    },
    eventTime:{
        type: String,
        required:[true,"Please enter a valid date"]
    },
    createdBy:{
        type: String,
        required:[true, 'Please enter creators name'],
        maxlength:[40, "The title cannot exceed 40 chracters"],
        minlength:[2, "The title must be at least 2 characters"],
    }, 
   
  
}, {timestamps:true}
);



const Race = mongoose.model("Race",RaceSchema)
module.exports = Race;