import type {ActionArgs, LoaderArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import invariant from "tiny-invariant";
import FormInputs from "~/components/compositions/form-inputs";
import GenericTable from "~/components/compositions/generic-table";
import {deleteExpenseGroup} from "~/models/expense-group.server";
import {changeExpenseGroupOrder} from "./database.expense-group";

export function loader({params}: LoaderArgs) {
  const id = params.id;
  return id;
}

export async function action({request}: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "create") {
    const name = formData.get("name");

    invariant(name, "Expense Group name not defined!");
    invariant(typeof (name) === "string", "Expense Group name need to be a text!");

    await createExpenseGroupButton({
      name: name,
      hidden: formData.get("hidden") ? true : false
    })

  } else {
    const intentString = intent?.toString();
    const [action, idString] = intentString?.split("-") || [];
    const idNumber = parseInt(idString, 10);

    switch (action) {
      case "update":
        console.log('Update: ', idNumber);
        break;

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
  const id = useLoaderData();
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
          submitTitle={"Save"}
        ></FormInputs>
      </div>
    </>
  )
}
