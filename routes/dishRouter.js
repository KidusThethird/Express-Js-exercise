const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')


.get((req,res,next)=>{

    res.end("will send all the dishes to you!");
})

.post((req,res,next)=>{

    res.end("Will add the dish : "+ req.body.name + 'with details: '+ req.body.description);
})


.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation is not supported on the dishes");
})

.delete((req,res,next)=>{
   
    res.end("Deleteing all the dishes!");
});


module.exports = dishRouter;