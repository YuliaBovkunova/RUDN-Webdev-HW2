import { Container, Grid } from "@mui/material"
import { useItems } from "../api/itemApi"
import StatusGroup from "../components/status/StatusGroup"

const DashboardView = () => {
  const { data: items = [] } = useItems()

  const pendingItems: typeof items = []
  const activeItems: typeof items = []
  const completedItems: typeof items = []

  for (let i = 0; i < items.length; i++) {
    if (items[i].status === 0) {
      pendingItems.push(items[i])
    } else if (items[i].status === 1) {
      activeItems.push(items[i])
    } else if (items[i].status === 2) {
      completedItems.push(items[i])
    }
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 5,
        bgcolor: "#f5f5f5",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <StatusGroup title="К выполнению" items={pendingItems} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatusGroup title="В работе" items={activeItems} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatusGroup title="Выполнено" items={completedItems} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default DashboardView
