import { Box } from "@mui/material"

type ItemBadgeProps = {
  id: number
}

const ItemBadge = ({ id }: ItemBadgeProps) => {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        bgcolor: "#8338ec",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "bold",
        mr: 1.5,
      }}
    >
      {id}
    </Box>
  )
}

export default ItemBadge
