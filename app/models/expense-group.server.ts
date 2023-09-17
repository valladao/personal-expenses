import prisma from "~/db.server"
import type { ExpenseGroup } from "@prisma/client"

export async function createExpenseGroup(
  newEntry: Pick<ExpenseGroup, "name" | "order" | "hidden" | "deleted">
) {
  return prisma.expenseGroup.create({ data: newEntry })
}

export async function getExpenseGroupItems() {
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

export async function deleteExpenseGroup(id: number) {
  return prisma.expenseGroup.update({
    where: { id },
    data: { deleted: true }
  })
}

// Retrieve the highest order item
export async function getExpenseGroupHighOrder() {
  return prisma.expenseGroup.findFirst({
    orderBy: { order: "desc" }
  })
}

// Update the item order
export async function updateExpenseGroupOrder(id: number, newOrder: number) {
  return prisma.expenseGroup.update({
    where: { id },
    data: { order: newOrder }
  })
}
