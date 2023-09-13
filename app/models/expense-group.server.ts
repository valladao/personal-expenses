import prisma from "~/db.server"

export async function createExpenseGroup(newEntry: any) {
  return prisma.expenseGroup.create({ data: newEntry })
}
