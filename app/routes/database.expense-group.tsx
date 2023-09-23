import {json} from "@remix-run/node";
import {Outlet, useLoaderData} from "@remix-run/react";
import PageTitle from "~/components/elements/page-title";
import {dbGetExpenseGroupItems, dbUpdateExpenseGroupOrder} from "~/models/expense-group.server";

export async function loader() {
  const expenseGroupItems = await dbGetExpenseGroupItems();
  return json({
    expenseGroupItems
  })
}

export default function ExpenseGroup() {
  const expenseGroupItems = useLoaderData().expenseGroupItems;
  return (
    <>
      <PageTitle>Expense Group</PageTitle>
      <div className="flex">
        <Outlet context={[expenseGroupItems]}></Outlet>
      </div>
    </>
  );
}

/* Shared JavaScript functions
   To be used by the child functions
 */

export async function changeExpenseGroupOrder(id: number, up = false) {
  const expenseGroupItems = await dbGetExpenseGroupItems();
  const idOrderArray = expenseGroupItems.map((item) => {
    return {id: item.id, order: item.order}
  })
  const selectedIndex = idOrderArray.findIndex(item => item.id === id);

  if (!up) {
    if (idOrderArray[selectedIndex + 1]) {
      await dbUpdateExpenseGroupOrder(id, idOrderArray[selectedIndex + 1].order)
      await dbUpdateExpenseGroupOrder(idOrderArray[selectedIndex + 1].id, idOrderArray[selectedIndex].order)
    } else {
      // This needs to be improved with error treatment
      console.log('Error: This is the last item!');
    }
  } else {
    if (idOrderArray[selectedIndex - 1]) {
      await dbUpdateExpenseGroupOrder(id, idOrderArray[selectedIndex - 1].order)
      await dbUpdateExpenseGroupOrder(idOrderArray[selectedIndex - 1].id, idOrderArray[selectedIndex].order)
    } else {
      // This needs to be improved with error treatment
      console.log('Error: This is the first item!');
    }
  }

}
