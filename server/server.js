//importing dependencies 
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(morgan('dev'));
//needed to parser data from frontend 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json('hello beuva');
});

app.post('/', (req, res) => {
    var hair = ['brazilian', 'mongolian', 'indan remy'];
    res.send(hair);
    console.log(req.body.name);
});

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server listening on port: 3000");
    }
});