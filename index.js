const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());


app.all('/dishes', (req,res,next)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{

    res.end("will send all the dishes to you!");
});

app.post('/dishes',(req,res,next)=>{

    res.end("Will add the dish : "+ req.body.name + 'with details: '+ req.body.description);
});


app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation is not supported on the dishes");
});

app.delete('/dishes',(req,res,next)=>{
   
    res.end("Deleteing all the dishes!");
});


/////////////////////////start


app.get('/dishes/:dishId',(req,res,next)=>{

    res.end("will send details of the dish :" + req.params.dishId);
});

app.post('/dishes/:dishId',(req,res,next)=>{

    res.statusCode=403;
    res.end("Post operation is not supported on the dish: " + req.params.dishId);
});


app.put('/dishes/:dishId',(req,res,next)=>{
    
    res.write('Updating the dish: '+ req.params.dishId);
    res.end("will update the dish: "+ req.body.name + " with details: "+ req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
   
    res.end("Deleteing dish : " + req.params.dishId);
});


//////////////////////////end


app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>')
});

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
});