import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { validateMail } from "../../shared/utils/validators"
import InputWithLabel from "../../shared/components/InputWithLabel"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) {
  const [mail, setMail] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const handleSendInvitation = () => {
    // send frd request to server
  }

  const handleCloseDialog = () => {
    closeDialogHandler()
    setMail("")
  }

  useEffect(() => {
    setIsFormValid(validateMail(mail))
  }, [mail])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddFriendDialog
