import invariant from "tiny-invariant";
import FormInputs from "~/components/compositions/form-inputs";
import GenericTable from "~/components/compositions/generic-table";
import {dbCreateExpenseGroup, dbDeleteExpenseGroup, dbGetExpenseGroupHighOrder} from "~/models/expense-group.server";
import {changeExpenseGroupOrder} from "./database.expense-group";
import {isRouteErrorResponse, useOutletContext, useRouteError} from "@remix-run/react";
import TableEntry from "~/components/elements/table-entry";

import type {ActionArgs} from "@remix-run/node";
import type {ExpenseGroup as ExpenseGroupType} from "@prisma/client";
import {getIntentData} from "~/utils";
import ErrorFallback from "~/components/compositions/error-fallback";

async function createExpenseGroupButton({name, hidden}: {name: string, hidden: boolean}) {
  const highOrderItem = await dbGetExpenseGroupHighOrder();
  const order = highOrderItem?.order ? highOrderItem.order + 1 : 1;

  await dbCreateExpenseGroup({name, order, hidden, deleted: false});
}

export async function action({request}: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "create") {
    const name = formData.get("name");

    if (!name) throw new Response("Expense Group name not defined!", {status: 400});
    if (typeof (name) !== "string") throw new Response("Expense Group name need to be a text!", {status: 400});

    await createExpenseGroupButton({
      name: name,
      hidden: formData.get("hidden") ? true : false
    })

  } else {
    const [action, idNumber] = getIntentData(intent);

    invariant(action, "Button action not defined!");
    invariant(typeof idNumber === "number", "Expense Group ID invalid!");

    switch (action) {
      case "delete":
        await dbDeleteExpenseGroup(idNumber);
        break;

      case "down":
        await changeExpenseGroupOrder(idNumber);
        break;

      case "up":
        await changeExpenseGroupOrder(idNumber, true);
        break;
    }

  }

  return null;
}

export default function ExpenseGroupEdit() {
  const [expenseGroupItems]: [ExpenseGroupType[]] = useOutletContext();
  return (
    <>
      <GenericTable>
        {expenseGroupItems.map((expenseGroupItem: ExpenseGroupType) => <TableEntry key={expenseGroupItem.id} entry={expenseGroupItem} col2={"Hidden: " + expenseGroupItem.hidden} />)}
      </GenericTable>

      <FormInputs
        formTitle="Create New Expense Group"
        submitTitle="Create"
        submitIntent="create"
      ></FormInputs>
    </>
  )
}

export function ErrorBoundary() {
  const [expenseGroupItems]: [ExpenseGroupType[]] = useOutletContext();
  const error = useRouteError()
  console.error('Error found:', error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      return (
        <>
          <GenericTable>
            {expenseGroupItems.map((expenseGroupItem: ExpenseGroupType) => <TableEntry key={expenseGroupItem.id} entry={expenseGroupItem} col2={"Hidden: " + expenseGroupItem.hidden} />)}
          </GenericTable>
          <div className="w-1/2 p-4">
            <ErrorFallback>{error.data}</ErrorFallback>
          </div>
        </>
      )
    }
  }

}
