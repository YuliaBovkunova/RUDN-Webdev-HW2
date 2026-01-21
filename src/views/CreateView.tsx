import { useState } from "react"
import { Container, Paper, TextField, Button, Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { getItems, setItems } from "../data/itemStore"
import type { WorkItem } from "../types/WorkItem"

const CreateView = () => {
  const [itemName, setItemName] = useState("")
  const [itemDesc, setItemDesc] = useState("")
  const goTo = useNavigate()
  const queryClient = useQueryClient()

  const handleCreate = () => {
    if (!itemName.trim()) {
      return
    }

    const allItems = getItems()
    let nextId = 1
    if (allItems.length > 0) {
      let maxId = 0
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].id > maxId) {
          maxId = allItems[i].id
        }
      }
      nextId = maxId + 1
    }

    const newItem: WorkItem = {
      id: nextId,
      name: itemName,
      description: itemDesc || undefined,
      createdAt: new Date(),
      status: 0,
    }

    setItems([...allItems, newItem])
    queryClient.invalidateQueries({ queryKey: ["items"] })
    goTo("/tasks")
  }

  const handleCancel = () => {
    goTo("/tasks")
  }

  return (
    <Container
      maxWidth="sm"
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
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "#8338ec",
          }}
        >
          Создать новую задачу
        </Typography>
        <TextField
          label="Название задачи"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          fullWidth
          required
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "&:hover fieldset": {
                borderColor: "#ff006e",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#8338ec",
                borderWidth: 2,
              },
            },
          }}
        />
        <TextField
          label="Описание задачи"
          value={itemDesc}
          onChange={(e) => setItemDesc(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "&:hover fieldset": {
                borderColor: "#ff006e",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#8338ec",
                borderWidth: 2,
              },
            },
          }}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleCreate}
            sx={{
              bgcolor: "#8338ec",
              borderRadius: "12px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Создать
          </Button>
          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{
              borderRadius: "12px",
              px: 4,
              py: 1.5,
              borderColor: "#8338ec",
              color: "#8338ec",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Отмена
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default CreateView
