import {useLoaderData, useOutletContext} from "@remix-run/react";
import invariant from "tiny-invariant";
import FormInputs from "~/components/compositions/form-inputs";
import GenericTable from "~/components/compositions/generic-table";
import {dbGetExpenseGroupItem, dbUpdateExpenseGroupItem, dbDeleteExpenseGroup} from "~/models/expense-group.server";
import {changeExpenseGroupOrder} from "./database.expense-group";
import TableEntry from "~/components/elements/table-entry";

import {json, type ActionArgs, type LoaderArgs, redirect} from "@remix-run/node";
import type {ExpenseGroup as ExpenseGroupType} from "@prisma/client";
import {getIntentData} from "~/utils";

export async function loader({params}: LoaderArgs) {
  invariant(params.id, "Expense group ID missing!")
  const id = Number(params.id);
  const selectedItem = await dbGetExpenseGroupItem(id);
  return json({id, selectedItem});
}

export async function action({request, params}: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "edit") {
    const name = formData.get("name");

    invariant(name, "Expense Group name not defined!");
    invariant(params.id, "Expense group ID missing!")
    invariant(typeof (name) === "string", "Expense Group name need to be a text!");

    await dbUpdateExpenseGroupItem({
      id: Number(params.id),
      name: name,
      hidden: formData.get("hidden") ? true : false
    })

    return redirect("/database/expense-group")

  } else {
    const [action, idNumber] = getIntentData(intent);

    invariant(action, "Action not defined!");
    invariant(typeof idNumber === "number", "Invalid idNumber!");

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

    return null;
  }

}

export default function ExpenseGroupEdit() {
  const id = useLoaderData().id;
  const selectedItem = useLoaderData().selectedItem;
  const [expenseGroupItems]: [ExpenseGroupType[]] = useOutletContext();
  return (
    <>
      <div className="w-1/2 p-4">
        <GenericTable>
          {expenseGroupItems.map((expenseGroupItem: ExpenseGroupType) => <TableEntry key={expenseGroupItem.id} entry={expenseGroupItem} col2={"Hidden: " + expenseGroupItem.hidden} />)}
        </GenericTable>
      </div>

      <div className="w-1/2 p-4">
        <FormInputs
          formTitle={"Edit Expense Group: ID " + id}
          submitTitle="Save"
          submitIntent="edit"
          cancel={true}
          selectedItem={selectedItem}
        ></FormInputs>
      </div>
    </>
  )
}
