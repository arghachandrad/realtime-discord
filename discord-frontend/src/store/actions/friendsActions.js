import * as api from "../../api/friendsApi"
import { openAlertMessage } from "./alertAction"

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
}

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data)

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data))
    } else {
      dispatch(openAlertMessage(`Invitation has been sent`))
      closeDialogHandler()
    }
  }
}
