// import React from "react"
// import { Redirect } from "react-router-dom"
// import useAuth from "../hooks/useAuth"

// const DoctorAuthGuard = ({ children }) => {
//   const { isAuthenticated, user } = useAuth()

//   console.log("DOCTOR AUTH GUARD")
//   console.log(isAuthenticated)
//   console.log(user)

//   if (!isAuthenticated && user == null) {
//     return <Redirect to="/login" />
//   }

//   if (
//     user != null &&
//     localStorage.getItem("accessRole") &&
//     parseInt(localStorage.getItem("accessRole")) !== 2
//   ) {
//     return <Redirect to="/" />
//   }

//   return <>{children}</>
// }

// export default DoctorAuthGuard
