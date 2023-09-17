import {useLoaderData, useOutletContext} from "@remix-run/react";
import invariant from "tiny-invariant";
import FormInputs from "~/components/compositions/form-inputs";
import GenericTable from "~/components/compositions/generic-table";
import {dbGetExpenseGroupItem, deleteExpenseGroup} from "~/models/expense-group.server";
import {changeExpenseGroupOrder} from "./database.expense-group";
import TableEntry from "~/components/elements/table-entry";

import {json, type ActionArgs, type LoaderArgs} from "@remix-run/node";
import type {ExpenseGroup as ExpenseGroupType} from "@prisma/client";

export async function loader({params}: LoaderArgs) {
  invariant(params.id, "Expense group ID missing!")
  const id = Number(params.id);
  const selectedItem = await dbGetExpenseGroupItem(id);
  return json({id, selectedItem});
}

export async function action({request}: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "edit") {
    const name = formData.get("name");

    invariant(name, "Expense Group name not defined!");
    invariant(typeof (name) === "string", "Expense Group name need to be a text!");

    console.log("Manoel: Edit clicked!")

  } else {
    const intentString = intent?.toString();
    const [action, idString] = intentString?.split("-") || [];
    const idNumber = parseInt(idString, 10);

    switch (action) {
      case "delete":
        await deleteExpenseGroup(idNumber);
        break;

      case "down":
        await changeExpenseGroupOrder(idNumber);
        break;

      case "up":
        await changeExpenseGroupOrder(idNumber, true);
        break;

      default:
        break;
    }

  }

  return null;
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
