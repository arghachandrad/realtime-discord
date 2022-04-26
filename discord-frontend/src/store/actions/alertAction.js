// import * as api from "../../api/authApi"

export const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT_OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT_CLOSE_ALERT_MESSAGE",
}

export const openAlertMessage = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  }
}

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  }
}
