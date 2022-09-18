const UserController = require('../controllers/user.controller')

module.exports = (app) =>{
    app.get('/api/users', UserController.getUser);
    app.get('/api/users/:id', UserController.getUserById);
    app.post('/api/users/create', UserController.createUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);
    
}