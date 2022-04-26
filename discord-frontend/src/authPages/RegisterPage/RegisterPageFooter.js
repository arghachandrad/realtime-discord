import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import { useHistory } from "react-router-dom"
import { Tooltip } from "@mui/material"

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory()

  const handlePushToLoginPage = async () => {
    history.push("/login")
  }

  const getFormNotValidMessage = () => {
    return "Username should contains between 3 and 12 characters and password should contain between 6 to 12 character, also correct mail should be provided"
  }
  const getFormValidMessage = () => {
    return "Press to register"
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            onClick={handleRegister}
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account ?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  )
}

export default RegisterPageFooter
