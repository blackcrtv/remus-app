const express = require('express');
const path = require('path');
const net = require('net');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const TCP_PORT = 8090;
const HTTP_PORT = 3000;

io.on('connection', (socket) => {
    console.log('Client connected');

    // Receive data from the other server via socket
    const tcpServer = net.createServer((tcpSocket) => {
        console.log('Listening on TCP ' + TCP_PORT);

        // Handle data received from the other server
        tcpSocket.on('data', (data) => {
            console.log(data)
            // Process the received data as needed
            const parsedData = processData(data);

            // Send the parsed data to the client
            socket.emit('clientData', parsedData);
        });

        // Handle server socket disconnection
        tcpSocket.on('end', () => {
            console.log('Connection from the other server closed');
        });

        tcpSocket.on('error', (err) => {
            console.log('Error in the connection from the other server:', err);
        });
    });

    tcpServer.listen(TCP_PORT, () => {
        console.log(`TCP server listening on port ${TCP_PORT}`);
    });

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
        tcpServer.close();
    });
});

server.listen(HTTP_PORT, () => {
    console.log(`HTTP server listening on port ${HTTP_PORT}`);
});

const MAPPER_EVENT = {
    '0': 'coffee_cup',
    '1': 'no_event',
    '2': 'refrigerator',
    '3': 'sink_on'
}

function processData(data) {
    let dataJson = JSON.parse(data.toString());
    return {
        ...dataJson,
        event: MAPPER_EVENT[dataJson.event ?? 0]
    }
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});