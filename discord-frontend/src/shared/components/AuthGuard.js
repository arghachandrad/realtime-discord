import React from "react"
import { Redirect } from "react-router-dom"

const AuthGuard = ({ children }) => {
  if (
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === null
  ) {
    return <Redirect to="/login" />
  }

  return <>{children}</>
}

export default AuthGuard
