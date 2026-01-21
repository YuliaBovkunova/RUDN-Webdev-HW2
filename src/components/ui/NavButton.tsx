import { Button } from "@mui/material"

type NavButtonProps = {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary"
}

const NavButton = ({ label, onClick, variant = "primary" }: NavButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        mr: variant === "primary" ? 1 : 0,
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        backgroundColor: variant === "secondary" ? "rgba(255,255,255,0.2)" : "transparent",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.2)",
        },
      }}
    >
      {label}
    </Button>
  )
}

export default NavButton
