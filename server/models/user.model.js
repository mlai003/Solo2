const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, 'Please enter a valid name'],
        maxlength:[20, "Name cannot exceed 20 chracters"],
        minlength:[2, "Name must be at least 2 characters"],
    },
// will get api to display all cars 
    carMake:{
        type: String,
        required: [true, 'Please enter a valid car make '],
    } ,
    
    carModel:{
        type: String,
        required:[true, "Please enter a valid car model"]
    },

    year:{
        type: Number,
        required:[true, "Please enter the year car was made"]
    }
    ,
    trackDays:{
        type: Number,
        required:[true, "Please input number of track days attended"]
    },

    description:{
        type: String,
    },

    
}, {timestamps:true}
);

const User = mongoose.model("User",UserSchema)
module.exports = User;