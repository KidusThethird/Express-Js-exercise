const express = require('express');
const bodyParser = require('body-parser');

const promotions = express.Router();

promotions.use(bodyParser.json());

promotions.route('/')


.get((req,res,next)=>{

    res.end("will send all the promotions to you!");
})

.post((req,res,next)=>{

    res.end("Will add the promotions : "+ req.body.name + ' with details: '+ req.body.description);
})


.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation is not supported on the promotions");
})

.delete((req,res,next)=>{
   
    res.end("Deleteing all the promotions!");
    
    
});


//Adding the remaining handlers with Id


promotions.get('/:promotionId',(req,res,next)=>{

    res.end("will send details of the leader :" + req.params.promotionId);
});

promotions.post('/:promotionId',(req,res,next)=>{

    res.statusCode=403;
    res.end("Post operation is not supported on the promotion: " + req.params.promotionId);
});


promotions.put('/:promotionId',(req,res,next)=>{
    
    res.write('Updating the promotion: '+ req.params.promotionId);
    res.end("will update the promotion: "+ req.body.name + " with details: "+ req.body.description);
});

promotions.delete('/:promotionId',(req,res,next)=>{
   
   
    res.statusCode=403;
    res.end("Deleting promotion: " + req.params.promotionId);
});




module.exports = promotions;