import { Container, Typography, Button, Paper } from "@mui/material"
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom"

const NotFoundView = () => {
  const err = useRouteError()
  const goTo = useNavigate()

  let msg = "Произошла ошибка"
  if (isRouteErrorResponse(err)) {
    if (err.status === 404) {
      msg = "Страница не найдена"
    } else {
      msg = err.statusText || String(err.status)
    }
  } else if (err instanceof Error) {
    msg = err.message
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 8,
        bgcolor: "#f5f5f5",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#8338ec",
          }}
        >
          {msg}
        </Typography>
        <Button
          variant="contained"
          onClick={() => goTo("/tasks")}
          sx={{
            bgcolor: "#8338ec",
            borderRadius: "12px",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Вернуться на главную
        </Button>
      </Paper>
    </Container>
  )
}

export default NotFoundView
