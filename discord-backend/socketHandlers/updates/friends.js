const User = require("../../models/user")
const FriendInvitation = require("../../models/friendInvitation")

// in server store we keep information of socket and user
const serverStore = require("../../serverStore")

const updatePendingFriendsInvitations = async (userId) => {
  // check if any socket is active(online) with this userId(Invited User)
  try {
    // find pending invitations
    const pendingFriendsInvitations = await FriendInvitation.find({
      receiverId: userId,
    }).populate("senderId", "_id username mail")

    console.log(pendingFriendsInvitations)

    // find if user of specified userId has active connection or Online, and get those socketIds
    const receiverSocketIdList = serverStore.getActiveConnections(userId)

    console.log("receiverId list: ", receiverSocketIdList)
    // Now emit pending friends to these socketIds
    const io = serverStore.getSocketServerInstance()
    receiverSocketIdList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friends-invitations", {
        pendingFriendsInvitations: pendingFriendsInvitations
          ? pendingFriendsInvitations
          : [],
      })
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  updatePendingFriendsInvitations,
}
