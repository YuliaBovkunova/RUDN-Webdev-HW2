import { createBrowserRouter } from "react-router-dom"
import AppShell from "./components/layout/AppShell"
import DashboardView from "./views/DashboardView"
import CreateView from "./views/CreateView"
import DetailView from "./views/DetailView"
import NotFoundView from "./views/NotFoundView"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <NotFoundView />,
    children: [
      {
        index: true,
        element: <DashboardView />,
      },
      {
        path: "tasks",
        element: <DashboardView />,
      },
      {
        path: "new",
        element: <CreateView />,
      },
      {
        path: "tasks/:id",
        element: <DetailView />,
      },
      {
        path: "*",
        element: <NotFoundView />,
      },
    ],
  },
])
