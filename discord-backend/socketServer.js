// will add socket io server with our express server
// server parameter refers to http server(our express server)
const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  })

  // listen if any client will connect, multiple socket for same user(if app opened in multiple tabs)
  io.on("connection", (socket) => {
    console.log("user connected")
    console.log(socket.id)
  })
}

module.exports = {
  registerSocketServer,
}
