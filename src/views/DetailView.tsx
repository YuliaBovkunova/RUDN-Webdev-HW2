import { Container, Paper, Typography, Box } from "@mui/material"
import { useParams, useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { getItems, setItems, removeItem } from "../data/itemStore"
import DetailField from "../components/detail/DetailField"
import StatusField from "../components/detail/StatusField"
import ActionButton from "../components/detail/ActionButton"

const DetailView = () => {
  const { id } = useParams()
  const goTo = useNavigate()
  const queryClient = useQueryClient()

  const items = getItems()
  const currentItem = items.find((i) => i.id === Number(id))

  if (!currentItem) {
    return (
      <Container
        sx={{
          py: 4,
          bgcolor: "#f5f5f5",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#ff006e",
          }}
        >
          Задача не найдена
        </Typography>
      </Container>
    )
  }

  const updateStatus = (newStatus: number) => {
    const updated: typeof items = []
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === currentItem.id) {
        updated.push({ ...items[i], status: newStatus })
      } else {
        updated.push(items[i])
      }
    }
    setItems(updated)
    queryClient.invalidateQueries({ queryKey: ["items"] })
    goTo("/tasks")
  }

  const handleDelete = () => {
    removeItem(currentItem.id)
    queryClient.invalidateQueries({ queryKey: ["items"] })
    goTo("/tasks")
  }

  const handleBack = () => {
    goTo("/tasks")
  }

  const getStatusLabel = (s: number) => {
    if (s === 0) {
      return "К выполнению"
    }
    if (s === 1) {
      return "В работе"
    }
    if (s === 2) {
      return "Выполнено"
    }
    return "Неизвестно"
  }

  return (
    <Container
      maxWidth="md"
        sx={{
          py: 5,
          bgcolor: "#f5f5f5",
          minHeight: "calc(100vh - 64px)",
        }}
      >
      <Paper
        sx={{
          p: 5,
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "#8338ec",
          }}
        >
          Задача #{currentItem.id}
        </Typography>

        <DetailField label="НОМЕР" value={currentItem.id} accentColor="#ff006e" />
        <DetailField label="НАЗВАНИЕ" value={currentItem.name} accentColor="#8338ec" />
        <DetailField
          label="ОПИСАНИЕ"
          value={currentItem.description || "Нет описания"}
          accentColor="#3a86ff"
        />
        <StatusField statusText={getStatusLabel(currentItem.status)} />
        <DetailField
          label="ДАТА СОЗДАНИЯ"
          value={currentItem.createdAt.toLocaleDateString("ru-RU")}
          accentColor="#ff006e"
        />

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 5 }}>
          {currentItem.status !== 0 && (
            <ActionButton label="К выполнению" onClick={() => updateStatus(0)} variant="status" statusType="todo" />
          )}
          {currentItem.status !== 1 && (
            <ActionButton label="В работе" onClick={() => updateStatus(1)} variant="status" statusType="progress" />
          )}
          {currentItem.status !== 2 && (
            <ActionButton label="Выполнено" onClick={() => updateStatus(2)} variant="status" statusType="done" />
          )}
          <ActionButton label="Удалить" onClick={handleDelete} variant="danger" />
          <ActionButton label="Назад" onClick={handleBack} variant="outline" />
        </Box>
      </Paper>
    </Container>
  )
}

export default DetailView
