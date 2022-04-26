import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import { useHistory } from "react-router-dom"
import { Tooltip } from "@mui/material"

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory()

  const handlePushToRegisterPage = async () => {
    history.push("/register")
  }

  const getFormNotValidMessage = () => {
    return "Enter correct email and password"
  }
  const getFormValidMessage = () => {
    return "Press to log in"
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            onClick={handleLogin}
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  )
}

export default LoginPageFooter
