import { Box } from "@mui/material"

type StatusBadgeProps = {
  count: number
}

const StatusBadge = ({ count }: StatusBadgeProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "50%",
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >
      {count}
    </Box>
  )
}

export default StatusBadge
