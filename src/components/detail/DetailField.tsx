import { Box, Typography } from "@mui/material"

type DetailFieldProps = {
  label: string
  value: string | number
  accentColor?: string
}

const DetailField = ({ label, value, accentColor = "#8338ec" }: DetailFieldProps) => {
  return (
    <Box
      sx={{
        mb: 3,
        p: 2,
        borderRadius: "12px",
        backgroundColor: `${accentColor}0d`,
        borderLeft: `4px solid ${accentColor}`,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: accentColor,
          fontWeight: "bold",
          fontSize: "0.85rem",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {label}
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5, fontWeight: 600, fontSize: "1.1rem" }}>
        {value}
      </Typography>
    </Box>
  )
}

export default DetailField
