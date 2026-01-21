import { Outlet } from "react-router-dom"
import TopBar from "./TopBar"

const AppShell = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}

export default AppShell
