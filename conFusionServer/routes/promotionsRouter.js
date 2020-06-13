const express = require('express');
const bodyParser = require('body-parser');

//start 
const mongoose = require('mongoose');
//const promotions = require('../models/promotions');
const Promotions = require('../models/promotions');

//end

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')


.get((req,res,next)=>{
    //start

    Promotions.find({})
    .then((promotions)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotions);
    }, (err) => next(err))
        .catch((err)=> next(err));
    
    //end
    
})

.post((req,res,next)=>{

    //start

    Promotions.create(req.body)
    .then((promotion)=>{
        console.log('promotion Created', promotion);
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
        
    },(err) => next(err))
    .catch((err)=> next(err));

    //end
})


.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation is not supported on the promotions");
})

.delete((req,res,next)=>{
   
    //start
        Promotions.remove({})
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


promotionRouter.route('/:promotionId')

.get((req,res,next)=>{

    Promotions.findById(req.params.promotionId)
    .then((promotion)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
        .catch((err)=> next(err));
   
})

.post((req,res,next)=>{

    res.statusCode=403;
    res.end("Post operation is not supported on the promotion: " + req.params.promotionId);
})


.put((req,res,next)=>{
    
    Promotions.findByIdAndUpdate(req.params.promotionId, {
        $set: req.body
    }, {new: true})
    
    .then((promotion)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
        .catch((err)=> next(err));
})

.delete((req,res,next)=>{
    Promotions.findByIdAndRemove(req.params.promotionId)
    .then((resp)=>{
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
        .catch((err)=> next(err));

});




module.exports = promotionRouter;