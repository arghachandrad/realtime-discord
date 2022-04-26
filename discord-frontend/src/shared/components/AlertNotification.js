import React from "react"
import { Alert, Snackbar } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { closeAlertMessage } from "../../store/actions/alertAction"

function AlertNotification() {
  const dispatch = useDispatch()
  const { showAlertMessage, alertMessageContent } = useSelector(
    (state) => state.alert
  )

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={() => dispatch(closeAlertMessage())}
      autoHideDuration={5000}
    >
      <Alert severity="info">
        {alertMessageContent ? alertMessageContent : ""}
      </Alert>
    </Snackbar>
  )
}

export default AlertNotification
