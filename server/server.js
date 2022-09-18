const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
require('./config/mongoose.config');

// middleware 'run this middleware on all my routes, mainly for post request. puts incoming data into the res.body
app.use(express.json(), express.urlencoded({extended:true}));

app.use(cors({
    origin:'http://localhost:3000',  //frontend port
}),
);
require('./routes/race.routes')(app)
require('./routes/user.routes')(app)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));