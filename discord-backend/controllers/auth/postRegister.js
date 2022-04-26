const User = require("../../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body

    // check if user exists
    const userExists = await User.exists({ mail: mail.toLowerCase() })

    if (userExists) {
      return res.status(409).send("Email already in use")
    }

    // before saving to DB encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10)

    // create user document and save in DB
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    })

    // create the JWT token, return to client
    const token = jwt.sign(
      {
        userId: user._id,
        mail: user.mail,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    )

    return res.status(201).json({
      userDetails: {
        mail: user.mail,
        token,
        username: user.username,
        id: user._id,
      },
    })
  } catch (error) {
    return res.status(500).send("Error occured. Please try again")
  }
}

module.exports = postRegister
