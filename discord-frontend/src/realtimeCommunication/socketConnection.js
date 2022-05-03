import io from "socket.io-client"

let socket = null

export const connectWithSocketServer = (userDetails) => {
  // attach jwt token to our initial connection with socket server
  const jwtToken = userDetails.token
  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken, // using this token on server side, we get which user is online
    },
  })

  socket.on("connect", () => {
    console.log("Successfully connected with socketio server")
    console.log(socket.id)
  })
}
