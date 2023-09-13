import prisma from "~/db.server"
import type { ExpenseGroup } from "@prisma/client"

export async function createExpenseGroup(
  newEntry: Pick<ExpenseGroup, "name" | "order" | "hidden" | "deleted">
) {
  return prisma.expenseGroup.create({ data: newEntry })
}

export async function getExpenseGroupItems() {
  return prisma.expenseGroup.findMany({})
}
