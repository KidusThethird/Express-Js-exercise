const express = require('express');
const bodyParser = require('body-parser');

const leaders = express.Router();

leaders.use(bodyParser.json());

leaders.route('/')


.get((req,res,next)=>{

    res.end("will send all the leaders to you!");
})

.post((req,res,next)=>{

    res.end("Will add the leaders : "+ req.body.name + ' with details: '+ req.body.description);
})


.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation is not supported on the leaders");
})

.delete((req,res,next)=>{
   
    res.end("Deleteing all the leaders!");
    
    
});


//Adding the remaining handlers with Id


leaders.get('/:leaderId',(req,res,next)=>{

    res.end("will send details of the leader :" + req.params.leaderId);
});

leaders.post('/:leaderId',(req,res,next)=>{

    res.statusCode=403;
    res.end("Post operation is not supported on the leader: " + req.params.leaderId);
});


leaders.put('/:leaderId',(req,res,next)=>{
    
    res.write('Updating the leader: '+ req.params.leaderId);
    res.end("will update the leader: "+ req.body.name + " with details: "+ req.body.description);
});

leaders.delete('/:leaderId',(req,res,next)=>{
   
   
    res.statusCode=403;
    res.end("Deleting leader: " + req.params.leaderId);
});

//






///////////////////////////////////
/*
app.delete('/dishes/:dishId',(req,res,next)=>{

    res.statusCode=403;
    res.end("Deleting dish: " + req.params.dishId);
});
*/

/////////////////////////////////
/////////////////////////////////



module.exports = leaders;