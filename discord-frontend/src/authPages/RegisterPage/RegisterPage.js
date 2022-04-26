import React, { useState, useEffect } from "react"
import { Typography } from "@mui/material"
import AuthBox from "../../shared/components/AuthBox"
import RegisterPageInputs from "./RegisterPageInputs"
import RegisterPageFooter from "./RegisterPageFooter"
import { validateRegisterForm } from "../../shared/utils/validators"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { register } from "../../store/actions/authActions"

const RegisterPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [mail, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }))
  }, [mail, username, password])

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password,
    }

    dispatch(register(userDetails, history))
  }

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>

      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />

      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  )
}

export default RegisterPage
