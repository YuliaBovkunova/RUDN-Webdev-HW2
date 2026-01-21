import { Box, Typography } from "@mui/material"

type StatusFieldProps = {
  statusText: string
}

const StatusField = ({ statusText }: StatusFieldProps) => {
  return (
    <Box
      sx={{
        mb: 3,
        p: 2,
        borderRadius: "12px",
        bgcolor: "#8338ec",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: "0.85rem",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        СТАТУС
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 0.5,
          fontWeight: "bold",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        {statusText}
      </Typography>
    </Box>
  )
}

export default StatusField
