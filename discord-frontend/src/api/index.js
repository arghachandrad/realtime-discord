import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
})

apiClient.interceptors.request.use((config) => {
  const userDetails = localStorage.getItem("user")

  if (userDetails) {
    const token = JSON.parse(localStorage.getItem("user")).token
    config.headers.Authorization = `Bearer ${token}` // attaching token to headers to every request

    // NOTE: for every request token will be send whether public or protected api, only in backend for public api, the token is not checked
  }
})

export default apiClient
