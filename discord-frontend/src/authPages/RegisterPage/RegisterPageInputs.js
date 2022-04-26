import React from "react"
import InputWithLabel from "../../shared/components/InputWithLabel"

function RegisterPageInputs({
  mail,
  setMail,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email address"
        type="text"
        placeholder="Enter email address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  )
}

export default RegisterPageInputs
