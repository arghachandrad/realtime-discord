import axios from "axios"
import { logout } from "../shared/utils/auth"

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
})

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user")

    if (userDetails) {
      const token = JSON.parse(localStorage.getItem("user")).token
      config.headers.Authorization = `Bearer ${token}` // attaching token to headers to every request

      // NOTE: for every request token will be send whether public or protected api, only in backend for public api, the token is not checked
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    const { status } = error.response
    if (status === 401 || status === 403) logout()
    return Promise.reject(error)
  }
)

export default apiClient
