import { AppBar, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Logo from "../ui/Logo"
import NavButton from "../ui/NavButton"

const TopBar = () => {
  const goTo = useNavigate()

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#8338ec",
      }}
    >
      <Toolbar>
        <Logo />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Доска задач
        </Typography>
        <NavButton label="Все задачи" onClick={() => goTo("/tasks")} />
        <NavButton label="Создать задачу" onClick={() => goTo("/new")} variant="secondary" />
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
