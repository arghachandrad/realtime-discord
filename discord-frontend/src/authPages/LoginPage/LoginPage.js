import { useEffect, useState } from "react"
import AuthBox from "../../shared/components/AuthBox"
import { validateLoginForm } from "../../shared/utils/validators"
import LoginPageFooter from "./LoginPageFooter"
import LoginPageHeader from "./LoginPageHeader"
import LoginPageInputs from "./LoginPageInputs"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { login } from "../../store/actions/authActions"

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }))
  }, [mail, password])

  const handleLogin = async () => {
    const userDetails = {
      mail,
      password,
    }

    dispatch(login(userDetails, history))
  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter handleLogin={handleLogin} isFormValid={isFormValid} />
    </AuthBox>
  )
}

export default LoginPage
