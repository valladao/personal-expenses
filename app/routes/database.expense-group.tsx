import TableEntry from "~/components/elements/table-entry";

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
        <h2 className="text-2xl font-bold mb-4">Edit Expense Group</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="flex justify-end">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
