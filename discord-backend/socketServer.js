// will add socket io server with our express server

const verifyTokenSocket = require("./middlewares/authSocket")
const disconnectHandler = require("./socketHandlers/disconnectHandler")
const newConnectionHandler = require("./socketHandlers/newConnectionHandler")
const serverStore = require("./serverStore")

// server parameter refers to http server(our express server)
const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  })

  // setting scoketInstance for global access
  serverStore.setSocketServerInstance(io)

  // using middle to fetch which user is responsible for new socket connection
  io.use((socket, next) => {
    verifyTokenSocket(socket, next)
  })

  // listen if any client will connect, multiple socket for same user(if app opened in multiple tabs)
  io.on("connection", (socket) => {
    console.log("user connected")

    // storing connected users in a Map with different socketId
    newConnectionHandler(socket, io)

    // multiple instance of socket for multiple user(getting who gets disconncted)
    socket.on("disconnect", () => {
      disconnectHandler(socket)
    })
  })
}

module.exports = {
  registerSocketServer,
}
