const app = require('../src/app'); 
const express = require('express');
const debug = require('debug')('nodestr:server');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
require("dotenv").config();

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.use(helmet());
app.disable('x-powered-by');
app.use(cors());
app.options('*', cors());
app.use(express.json());

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.keepAliveTimeout = 30000;
app.on('connection', function(socket) {
    console.log("A new connection was made by a client.");
    socket.setTimeout(30 * 1000); 
});

function normalizePort(val){
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }

    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port;

        switch(error.code){
            case 'EACCES':
                console.error(bind + 'required elevated privileges');
                process.exit(1);
                break;
            
            case 'EADDRINUSE':
                console.error(bind + 'is already in use');
                process.exit(1);
                break;

            default:
                throw error;
        }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
     ? 'pipe' + addr
     : 'port' + addr.port;
    debug('Listening on ' + bind);
}