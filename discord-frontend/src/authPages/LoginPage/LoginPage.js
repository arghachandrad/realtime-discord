import { useState } from "react"
import AuthBox from "../../shared/components/AuthBox"
import LoginPageFooter from "./LoginPageFooter"
import LoginPageHeader from "./LoginPageHeader"
import LoginPageInputs from "./LoginPageInputs"

const LoginPage = () => {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const handleLogin = async () => {
    //
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
