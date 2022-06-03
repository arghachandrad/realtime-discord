const connectedUsers = new Map()

let io = null

// need io globally
const setSocketServerInstance = (ioInstance) => {
  io = ioInstance
}
const getSocketServerInstance = () => {
  return io
}

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId })
  console.log("new connected users")
  console.log(connectedUsers)
}

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId)
    console.log("new connected users after disconnection")
    console.log(connectedUsers)
  }
}

// find online users of specific userId
const getActiveConnections = (userId) => {
  const activeConnections = []

  console.log("connected User", connectedUsers)
  connectedUsers.forEach((value, key) => {
    if (value.userId.toString() === userId) {
      activeConnections.push(key) // key is the socketId
    }
  })
  console.log("activeConnections", activeConnections)
  return activeConnections
}

module.exports = {
  getSocketServerInstance,
  setSocketServerInstance,
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
}
