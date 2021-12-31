let express = require("express");
let app = express();

let http = require("http");
let server = http.Server(app);

let socketIO = require("socket.io");
let io = socketIO(server);
const port = process.env.PORT || 3000;
// backend tarafında socketio nun connection ve message eventlerini kullanıyoruz
io.on("connection", (socket) => {
  socket.on("join", (data) => {
    socket.join(data.user);
    console.log(data.user, "connected");
  });
// x kişisinden gelen mesajı y kişisine gönderdiğimiz yer
  socket.on("message", (data) => {
      console.log(data)
    io.to(data.receiverId).emit("new message", data);
  });
});
server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
