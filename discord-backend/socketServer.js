// will add socket io server with our express server

const verifyTokenSocket = require("./middlewares/authSocket")
const newConnectionHandler = require("./socketHandlers/newConnectionHandler")

// server parameter refers to http server(our express server)
const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  })

  // using middle to fetch which user is responsible for new socket connection
  io.use((socket, next) => {
    verifyTokenSocket(socket, next)
  })

  // listen if any client will connect, multiple socket for same user(if app opened in multiple tabs)
  io.on("connection", (socket) => {
    console.log("user connected")

    // storing connected users in a Map with different socketId
    newConnectionHandler(socket, io)
  })
}

module.exports = {
  registerSocketServer,
}
