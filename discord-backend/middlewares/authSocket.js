// responsible to check the token, which is send with socket connection from frontend
const jwt = require("jsonwebtoken")

const config = process.env

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET)

    // to every socket event attach the decoded token
    socket.user = decoded
  } catch (error) {
    const socketError = new Error("NOT AUTHORIZED")
    return next(socketError)
  }

  next()
}

module.exports = verifyTokenSocket
