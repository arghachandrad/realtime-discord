import { styled } from "@mui/system"
import { useEffect } from "react"
import { logout } from "../shared/utils/auth"
import AppBar from "./AppBar/AppBar"
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar"
import Messenger from "./Messenger/Messenger"
import Sidebar from "./Sidebar/Sidebar"
import { setUserDetails } from "../store/actions/authActions"
import { useDispatch } from "react-redux"

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
})

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
    if (!userDetails) {
      logout()
    } else {
      dispatch(setUserDetails(JSON.parse(userDetails)))
    }
  }, [])
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  )
}

export default Dashboard
