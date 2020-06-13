const express = require('express');
const bodyParser = require('body-parser');

//start 
const mongoose = require('mongoose');
//const leaders = require('../models/leaders');
const Leaders = require('../models/leaders');

//end

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')


.get((req,res,next)=>{
    //start

    Leaders.find({})
    .then((leaders)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leaders);
    }, (err) => next(err))
        .catch((err)=> next(err));
    
    //end
    
})

.post((req,res,next)=>{

    //start

    Leaders.create(req.body)
    .then((leader)=>{
        console.log('leader Created', leader);
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
        
    },(err) => next(err))
    .catch((err)=> next(err));

    //end
})


.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation is not supported on the leaders");
})

.delete((req,res,next)=>{
   
    //start
        Leaders.remove({})
        .then((resp)=>{
            res.StatusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        },
        (err) => next(err))
        .catch((err)=> next(err));

    //end
    
    
});


//Adding the remaining handlers


leaderRouter.route('/:leaderId')

.get((req,res,next)=>{

    Leaders.findById(req.params.leaderId)
    .then((leader)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
        .catch((err)=> next(err));
   
})

.post((req,res,next)=>{

    res.statusCode=403;
    res.end("Post operation is not supported on the leader: " + req.params.leaderId);
})


.put((req,res,next)=>{
    
    Leaders.findByIdAndUpdate(req.params.leaderId, {
        $set: req.body
    }, {new: true})
    
    .then((leader)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
        .catch((err)=> next(err));
})

.delete((req,res,next)=>{
    Leaders.findByIdAndRemove(req.params.leaderId)
    .then((resp)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
        .catch((err)=> next(err));

});




module.exports = leaderRouter;