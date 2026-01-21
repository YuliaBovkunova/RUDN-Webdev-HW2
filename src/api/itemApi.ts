import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { WorkItem } from "../types/WorkItem"
import { getItems, setItems } from "../data/itemStore"

async function fetchItems(): Promise<WorkItem[]> {
  const existing = getItems()
  if (existing.length > 0) {
    return existing
  }

  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    const converted: WorkItem[] = []
    const data = response.data
    for (let i = 0; i < 15 && i < data.length; i++) {
      const item = data[i]
      converted.push({
        id: item.id,
        name: item.title,
        description: "",
        createdAt: new Date(),
        status: item.completed ? 2 : 0,
      })
    }
    setItems(converted)
    return converted
  } catch (err) {
    console.error(err)
    return []
  }
}

export function useItems() {
  return useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
  })
}
