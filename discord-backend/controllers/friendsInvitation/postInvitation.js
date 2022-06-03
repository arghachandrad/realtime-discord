const FriendInvitation = require("../../models/friendInvitation")
const User = require("../../models/user")

const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body

  // id whose want to invite(who send the invitation)
  const { userId, mail } = req.user

  // Check if friend that we would like to invite is not him itself
  if (mail.toLowerCase() === targetMailAddress.toLowerCase())
    return res.status(409).send("Sorry. You cannot become frd with yourself")

  // if that user you want to invite is exists in DB
  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  })

  if (!targetUser)
    return res
      .status(404)
      .send(
        `Friend of ${targetMailAddress} has not been found. Please check mail address`
      )

  // Check if invitation has been already sent
  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  })

  if (invitationAlreadyReceived)
    return res.status(409).send("Invitation has been already sent")

  // check if user which we would like to invite is already our friend
  const usersAlreadyFriend = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  )

  if (usersAlreadyFriend)
    return res
      .status(409)
      .send("Friend already added. Please check friend list")

  // create new invitation in DB
  const newInvitation = await FriendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  })

  // if invitation has been successfully created, update friends invitations if other user is online

  return res.status(201).send("Invitation has been sent")
}

module.exports = postInvite
