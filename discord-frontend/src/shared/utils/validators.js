export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)

  return isMailValid && isPasswordValid
}

export const validateRegisterForm = ({ mail, username, password }) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  const isUsernameValid = validateUsername(username)

  return isMailValid && isPasswordValid && isUsernameValid
}

export const validateMail = (mail) => {
  return String(mail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const validatePassword = (password) => {
  return password.length >= 6 && password.length < 13
}
const validateUsername = (username) => {
  return username.length >= 2 && username.length < 13
}
