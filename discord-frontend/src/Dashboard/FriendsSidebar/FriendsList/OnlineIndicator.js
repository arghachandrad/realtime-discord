import { Box } from "@mui/material"
import React from "react"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

function OnlineIndicator() {
  return (
    <Box
      sx={{
        color: "#3b855d",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  )
}

export default OnlineIndicator
