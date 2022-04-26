const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth/authControllers")
const Joi = require("joi")
const verifyToken = require("../middlewares/auth")
const validator = require("express-joi-validation").createValidator({})

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
})

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
})

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
)
router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
)

// test route to verify protected route
router.get("/test", verifyToken, (req, res) => {
  res.send("Request passed")
})

module.exports = router
