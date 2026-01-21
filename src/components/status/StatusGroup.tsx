import { Paper, Box } from "@mui/material"
import type { WorkItem } from "../../types/WorkItem"
import StatusGroupHeader from "./StatusGroupHeader"
import ItemCard from "../item/ItemCard"
import { getColumnColors } from "../../utils/colors"

type StatusGroupProps = {
  title: string
  items: WorkItem[]
}

const StatusGroup = ({ title, items }: StatusGroupProps) => {
  const colors = getColumnColors(title)

  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        minHeight: 450,
        bgcolor: colors.background,
        borderTop: `6px solid ${colors.border}`,
        borderRadius: "16px",
      }}
    >
      <StatusGroupHeader title={title} count={items.length} color={colors.header} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Box>
    </Paper>
  )
}

export default StatusGroup
