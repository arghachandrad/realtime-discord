import React from "react"
import { Button } from "@mui/material"
import GroupIcon from "@mui/icons-material/Groups"

function MainPageButton() {
  return (
    <Button
      sx={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "#fff",
        backgroundColor: "#5065f2",
      }}
    >
      <GroupIcon />
    </Button>
  )
}

export default MainPageButton
