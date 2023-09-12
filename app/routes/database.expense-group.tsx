import {
  FaCaretDown,
  FaCaretUp,
  FaPenToSquare,
  FaTrashCan
} from "react-icons/fa6";

export default function ExpenseGroup() {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Expense Groups</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Expense Group 1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <div className="rounded-md bg-emerald-600 p-2 pb-1 hover:bg-emerald-700">
                    <button className="text-white">
                      <FaPenToSquare size={20} />
                    </button>
                  </div>
                  <div className="rounded-md bg-red-600 p-2 pb-1 hover:bg-red-700">
                    <button className="text-white">
                      <FaTrashCan size={20} />
                    </button>
                  </div>
                  <div className="rounded-md bg-gray-600 p-2 pb-1 hover:bg-gray-700">
                    <button className="text-white">
                      <FaCaretDown size={20} />
                    </button>
                  </div>
                  <div className="rounded-md bg-gray-600 p-2 pt-3 pb-0 hover:bg-gray-700">
                    <button className="text-white">
                      <FaCaretUp size={20} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
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
