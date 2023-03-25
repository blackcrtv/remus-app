const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const dgram = require('dgram');
const udpServer = dgram.createSocket('udp4');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    // When a client connects, listen for incoming UDP datagrams
    
    // Start listening for incoming UDP datagrams
    // udpServer.bind(port);
});

udpServer.on('message', (msg, rinfo) => {
    console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);

    // Send the received message to the client through the web socket
    // socket.emit('message', msg.toString());
});

udpServer.bind(3001, () => {
    console.log(`Server listening on port ${3001}`);
  });
