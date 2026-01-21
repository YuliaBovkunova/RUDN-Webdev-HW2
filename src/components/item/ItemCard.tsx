import { Card, CardContent, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import type { WorkItem } from "../../types/WorkItem"
import ItemBadge from "./ItemBadge"
import ItemTitle from "./ItemTitle"

type ItemCardProps = {
  item: WorkItem
}

const ItemCard = ({ item }: ItemCardProps) => {
  const goTo = useNavigate()

  const handleClick = () => {
    goTo(`/tasks/${item.id}`)
  }

  return (
    <Card
      sx={{
        cursor: "pointer",
        bgcolor: "#fff",
        borderRadius: "12px",
        "&:hover": {
          boxShadow: 2,
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          <ItemBadge id={item.id} />
        </Box>
        <ItemTitle text={item.name} />
      </CardContent>
    </Card>
  )
}

export default ItemCard
