import {FaCaretDown, FaCaretUp, FaPenToSquare, FaTrashCan} from "react-icons/fa6";

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
                <button className="text-emerald-600 hover:text-emerald-700">
                  <FaPenToSquare />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrashCan />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <FaCaretDown />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <FaCaretUp />
                </button>
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

  )
}