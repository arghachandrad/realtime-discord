import apiClient from "."

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data)
  } catch (error) {
    return {
      error: true,
      exception: error,
    }
  }
}
