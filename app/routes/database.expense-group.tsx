import type {ActionArgs} from "@remix-run/node";
import TableEntry from "~/components/elements/table-entry";
import {createExpenseGroup} from "~/models/expense-group.server";

export async function action({request}: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const order = 0;
  const hidden = formData.get("hidden") ? formData.get("hidden") : false;
  const deleted = false;

  await createExpenseGroup({name, order, hidden, deleted});

  return null;
}

export default function ExpenseGroup() {
  return (
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
            <TableEntry text="Expense Group 1" />
            <TableEntry text="Expense Group 2" />
          </tbody>
        </table>
      </div>

      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Create New Expense Group</h2>
        <form method="post">
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
            <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
