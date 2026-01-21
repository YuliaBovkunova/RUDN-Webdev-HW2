import { Button } from "@mui/material"

type ActionButtonProps = {
  label: string
  onClick: () => void
  variant: "status" | "danger" | "outline"
  statusType?: "todo" | "progress" | "done"
}

const ActionButton = ({ label, onClick, variant, statusType }: ActionButtonProps) => {
  let bgColor = "#ff006e"
  
  if (variant === "status" && statusType === "progress") {
    bgColor = "#8338ec"
  } else if (variant === "status" && statusType === "done") {
    bgColor = "#3a86ff"
  } else if (variant === "danger") {
    bgColor = "#ef4444"
  }
  
  if (variant === "outline") {
    return (
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          borderRadius: "12px",
          px: 3,
          py: 1,
          borderColor: "#8338ec",
          color: "#8338ec",
          fontWeight: "bold",
        }}
      >
        {label}
      </Button>
    )
  }

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        bgcolor: bgColor,
        borderRadius: "12px",
        px: 3,
        py: 1,
        fontWeight: "bold",
      }}
    >
      {label}
    </Button>
  )
}

export default ActionButton
