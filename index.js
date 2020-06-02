const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const leaders = require('./routes/leaders');
const promotions = require('./routes/promotions');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());


app.use('/dishes',dishRouter);
app.all('/dishes', (req,res,next)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});


app.use('/leaders', leaders);
app.all('/leaders', (req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

});


app.use('/promotions', promotions);
app.all('/promotions', (req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

});







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