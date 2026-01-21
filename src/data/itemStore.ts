import type { WorkItem } from "../types/WorkItem"

let itemData: WorkItem[] = []

export function getItems(): WorkItem[] {
  return itemData
}

export function setItems(items: WorkItem[]): void {
  itemData = items
}

export function addItem(item: WorkItem): void {
  itemData.push(item)
}

export function updateItem(id: number, updated: WorkItem): void {
  const idx = itemData.findIndex((i) => i.id === id)
  if (idx !== -1) {
    itemData[idx] = updated
  }
}

export function removeItem(id: number): void {
  itemData = itemData.filter((i) => i.id !== id)
}

export function getItemById(id: number): WorkItem | undefined {
  return itemData.find((i) => i.id === id)
}
