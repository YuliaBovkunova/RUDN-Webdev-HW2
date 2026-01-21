import { Typography } from "@mui/material"

type ItemTitleProps = {
  text: string
}

const ItemTitle = ({ text }: ItemTitleProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        fontWeight: 600,
        color: "#2d3748",
        fontSize: "0.95rem",
        lineHeight: 1.5,
      }}
    >
      {text}
    </Typography>
  )
}

export default ItemTitle
