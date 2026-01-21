import { Box } from "@mui/material"
import AssignmentIcon from "@mui/icons-material/Assignment"

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AssignmentIcon sx={{ mr: 1, fontSize: 32, color: "#fff" }} />
    </Box>
  )
}

export default Logo
