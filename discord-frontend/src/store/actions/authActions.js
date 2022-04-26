import * as api from "../../api/authApi"
import { openAlertMessage } from "./alertAction"

export const authActions = {
  SET_USER_DETAILS: "AUTH_SET_USER_DETAILS",
}

export const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  }
}

export const login = (userDetails, history) => {
  return async (dispatch) => {
    // here we can execute async functions
    const response = await api.login(userDetails)

    if (response.error) {
      // show error message in alert
      dispatch(openAlertMessage(response?.exception?.response?.data))
    } else {
      const { userDetails } = response?.data
      localStorage.setItem("user", JSON.stringify(userDetails))

      dispatch(setUserDetails(userDetails))
      history.push("/dashboard")
    }
  }
}

export const register = (userDetails, history) => {
  return async (dispatch) => {
    // here we can execute async functions
    const response = await api.register(userDetails)

    if (response.error) {
      // show error message in alert
      dispatch(openAlertMessage(response?.exception?.response?.data))
    } else {
      const { userDetails } = response?.data
      localStorage.setItem("user", JSON.stringify(userDetails))

      dispatch(setUserDetails(userDetails))
      history.push("/dashboard")
    }
  }
}
