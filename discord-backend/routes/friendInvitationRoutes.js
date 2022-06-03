const express = require("express")
const router = express.Router()
const Joi = require("joi")
const friendInvitationControllers = require("../controllers/friendsInvitation/friendsInvitationControllers")
const verifyToken = require("../middlewares/auth")
const validator = require("express-joi-validation").createValidator({})

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
})

router.post(
  "/invite",
  verifyToken,
  validator.body(postFriendInvitationSchema),
  friendInvitationControllers.controllers.postInvitation
)

module.exports = router
