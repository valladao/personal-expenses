import {json, type ActionArgs} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import TableEntry from "~/components/elements/table-entry";
import {createExpenseGroup, deleteExpenseGroup, getExpenseGroupHighOrder, getExpenseGroupItems, updateExpenseGroupOrder} from "~/models/expense-group.server";
import type {ExpenseGroup as ExpenseGroupType} from "@prisma/client";
import invariant from "tiny-invariant";

async function createExpenseGroupButton({name, hidden}: {name: string, hidden: boolean}) {
  const highOrderItem = await getExpenseGroupHighOrder();
  const order = highOrderItem?.order ? highOrderItem.order + 1 : 1;

  await createExpenseGroup({name, order, hidden, deleted: false});
}

async function changeExpenseGroupOrder(id: number, up = false) {
  const expenseGroupItems = await getExpenseGroupItems();
  const idOrderArray = expenseGroupItems.map((item) => {
    return {id: item.id, order: item.order}
  })
  const selectedIndex = idOrderArray.findIndex(item => item.id === id);

  if (!up) {
    if (idOrderArray[selectedIndex + 1]) {
      await updateExpenseGroupOrder(id, idOrderArray[selectedIndex + 1].order)
      await updateExpenseGroupOrder(idOrderArray[selectedIndex + 1].id, idOrderArray[selectedIndex].order)
    } else {
      // This needs to be improved with error treatment
      console.log('Error: This is the last item!');
    }
  } else {
    if (idOrderArray[selectedIndex - 1]) {
      await updateExpenseGroupOrder(id, idOrderArray[selectedIndex - 1].order)
      await updateExpenseGroupOrder(idOrderArray[selectedIndex - 1].id, idOrderArray[selectedIndex].order)
    } else {
      // This needs to be improved with error treatment
      console.log('Error: This is the first item!');
    }
  }

}

export async function loader() {
  const expenseGroupItems = await getExpenseGroupItems();
  return json({
    expenseGroupItems
  })
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

export default function ExpenseGroup() {
  const expenseGroupItems = useLoaderData().expenseGroupItems;
  return (
    <Form method="post" reloadDocument>
      <div className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Expense Groups</h2>
          <table className="min-w-full bg-white border border-gray-200 border-separate rounded-md">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenseGroupItems.map((expenseGroupItem: ExpenseGroupType) => <TableEntry key={expenseGroupItem.id} entry={expenseGroupItem} />)}
            </tbody>
          </table>
        </div>

        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Create New Expense Group</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" id="hidden" name="hidden" className="form-checkbox h-5 w-5 text-emerald-600" />
              <span className="text-gray-700">Hide Expense Group</span>
            </label>
          </div>
          <div className="flex justify-end">
            <button type="submit" name="intent" value="create" className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded">Create</button>
          </div>

        </div>
      </div>
    </Form >
  );
}
