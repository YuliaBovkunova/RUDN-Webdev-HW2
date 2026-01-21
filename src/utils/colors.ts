export const COLUMN_COLORS = {
  todo: {
    border: "#ff006e",
    header: "#ff006e",
    background: "#ff006e",
  },
  progress: {
    border: "#8338ec",
    header: "#8338ec",
    background: "#8338ec",
  },
  done: {
    border: "#3a86ff",
    header: "#3a86ff",
    background: "#3a86ff",
  },
}

export function getColumnColors(title: string) {
  if (title === "К выполнению") {
    return COLUMN_COLORS.todo
  }
  if (title === "В работе") {
    return COLUMN_COLORS.progress
  }
  if (title === "Выполнено") {
    return COLUMN_COLORS.done
  }
  return COLUMN_COLORS.todo
}
