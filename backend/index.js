let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);
var messageArray=[]
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.user);
        console.log(data.user,"connected")
        //socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        console.log(data)
        //io.to(data.userId).emit('new message',data);
        io.to(data.receiverId).emit('new message', data);
    });
});
server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
