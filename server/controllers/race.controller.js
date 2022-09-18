const Race = require('../models/race.model')
const User = require('../models/user.model');
const userController = require('./user.controller');


// const updateRaceById = async

module.exports = {
    getRaces:(req,res) =>{
        Race.find({})
            .then((allRaces) => {
                console.log('allRaces');
                res.json(allRaces);
            })
            .catch(err => res.status(400).json({message:'something went wrong with findAll', error:err})
            );
    },

    
    createRace:(req,res) =>{
        Race.create(req.body)
            .then((newRace) => {
                console.log('newRace');
                res.json(newRace);
        })
        .catch(err => res.status(400).json({message:'something went wrong with createRace', error:err})
        );
    },

    getRaceById:(req,res) =>{
        Race.findById(req.params.id)
            .then((race) => {
                console.log('race');
                res.json(race);
        })
        .catch(err => res.status(400).json({message:'something went wrong with findById', error:err})
        );
    },

    deleteRace:(req,res) =>{
        Race.findByIdAndDelete(req.params.id)
            .then((race) => {
                console.log('race');
                res.json(race);
        })
        .catch(err => res.status(400).json({message:'something went wrong with Delete', error:err})
        );
    },

    updateRace:(req,res) =>{
        Race.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true} )
            .then((race) => {
                console.log('race');
                res.json(race);
        })
        .catch(err => res.status(400).json({message:'something went wrong with Update', error:err})
        );
    }
,
   
}
            



