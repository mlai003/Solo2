const RaceController = require('../controllers/race.controller')

module.exports = (app) =>{
    app.get('/api/races', RaceController.getRaces);
    app.get('/api/races/:id', RaceController.getRaceById);
    app.post('/api/races/create', RaceController.createRace);
    app.put('/api/races/:id', RaceController.updateRace);
    app.delete('/api/races/:id', RaceController.deleteRace);
}