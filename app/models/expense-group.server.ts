import prisma from "~/db.server"
import type { ExpenseGroup } from "@prisma/client"

export async function dbCreateExpenseGroup(
  newEntry: Pick<ExpenseGroup, "name" | "order" | "hidden" | "deleted">
) {
  return prisma.expenseGroup.create({ data: newEntry })
}

export async function dbGetExpenseGroupItems() {
  return prisma.expenseGroup.findMany({
    where: { deleted: false },
    orderBy: { order: "asc" }
  })
}

export async function dbGetExpenseGroupItem(id: number) {
  return prisma.expenseGroup.findUnique({
    where: { id: Number(id) }
  })
}

export async function dbUpdateExpenseGroupItem(
  newData: Pick<ExpenseGroup, "id" | "name" | "hidden">
) {
  return prisma.expenseGroup.update({
    where: { id: newData.id },
    data: newData
  })
}

export async function dbDeleteExpenseGroup(id: number) {
  return prisma.expenseGroup.update({
    where: { id },
    data: { deleted: true }
  })
}

// Retrieve the highest order item
export async function dbGetExpenseGroupHighOrder() {
  return prisma.expenseGroup.findFirst({
    orderBy: { order: "desc" }
  })
}

// Update the item order
export async function dbUpdateExpenseGroupOrder(id: number, newOrder: number) {
  return prisma.expenseGroup.update({
    where: { id },
    data: { order: newOrder }
  })
}
