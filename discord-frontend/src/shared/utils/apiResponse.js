import { logout } from "./auth"

const checkApiResponse = (exception) => {
  const responseCode = exception?.response?.status

  if (responseCode) {
    ;(responseCode === 401 || responseCode === 403) && logout()
  }
}

export default checkApiResponse
