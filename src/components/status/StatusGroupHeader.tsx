import { Box, Typography } from "@mui/material"
import StatusBadge from "./StatusBadge"

type StatusGroupHeaderProps = {
  title: string
  count: number
  color: string
}

const StatusGroupHeader = ({ title, count, color }: StatusGroupHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 3,
        p: 1.5,
        borderRadius: "12px",
        bgcolor: color,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        {title}
      </Typography>
      <StatusBadge count={count} />
    </Box>
  )
}

export default StatusGroupHeader
