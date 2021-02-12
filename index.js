const express = require('express');

const path = require('path');
require('dotenv').config();



//EXPRESS APP 

const app = express();

//NODE SERVER

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


//path 

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));


server.listen(process.env.PORT, (err) =>{
    if (err) throw new Error(err);
    console.log('server up');
});