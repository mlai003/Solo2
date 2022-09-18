const User = require('../models/user.model')

module.exports = {
    getUser:(req,res) =>{
        User.find({})
            .then((allUsers) => {
                console.log('allUsers');
                res.json(allUsers);
            })
            .catch(err => res.status(400).json({message:'something went wrong with findAll', error:err})
            );
    },

    createUser:(req,res) =>{
        User.create(req.body)
            .then((newUser) => {
                console.log('newUser');
                res.json(newUser);
        })
        .catch(err => res.status(400).json({message:'something went wrong with createUser', error:err})
        );
    },

    getUserById:(req,res) =>{
        User.findById(req.params.id)
            .then((user) => {
                console.log('user');
                res.json(user);
        })
        .catch(err => res.status(400).json({message:'something went wrong with findById', error:err})
        );
    },

    deleteUser:(req,res) =>{
        User.findByIdAndDelete(req.params.id)
            .then((user) => {
                console.log('user');
                res.json(user);
        })
        .catch(err => res.status(400).json({message:'something went wrong with Delete', error:err})
        );
    },

    updateUser:(req,res) =>{
        User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true} )
            .then((user) => {
                console.log('user');
                res.json(user);
        })
        .catch(err => res.status(400).json({message:'something went wrong with Update', error:err})
        );
    }

}