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


//Adding the remaining handlers


dishRouter.get('/:dishId',(req,res,next)=>{

    res.end("will send details of the dish :" + req.params.dishId);
});

dishRouter.post('/:dishId',(req,res,next)=>{

    res.statusCode=403;
    res.end("Post operation is not supported on the dish: " + req.params.dishId);
});


dishRouter.put('/:dishId',(req,res,next)=>{
    
    res.write('Updating the dish: '+ req.params.dishId);
    res.end("will update the dish: "+ req.body.name + " with details: "+ req.body.description);
});

dishRouter.delete('/:dishId',(req,res,next)=>{
   
   
    res.statusCode=403;
    res.end("Deleting dish: " + req.params.dishId);
});








///////////////////////////////////
/*
app.delete('/dishes/:dishId',(req,res,next)=>{

    res.statusCode=403;
    res.end("Deleting dish: " + req.params.dishId);
});
*/

/////////////////////////////////
/////////////////////////////////



module.exports = dishRouter;