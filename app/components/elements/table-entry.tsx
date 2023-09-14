import {
  FaCaretDown,
  FaCaretUp,
  FaPenToSquare,
  FaTrashCan
} from "react-icons/fa6";

export default function TableEntry({entry, col2}: {entry: {name: string, id: number}, col2: string}) {
  // Table is ready to add lines to the second column.
  // It is necessary to use \n inside the string.
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-lg">{entry.name}</td>
      <td className="px-6 py-4 text-sm whitespace-pre-line">{col2}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex space-x-2">
          <div className="rounded-md bg-emerald-600 p-2 pb-1 hover:bg-emerald-700">
            <button className="text-white" name="intent" value={'update-' + entry.id}>
              <FaPenToSquare size={20} />
            </button>
          </div>
          <div className="rounded-md bg-red-600 p-2 pb-1 hover:bg-red-700">
            <button className="text-white" name="intent" value={'delete-' + entry.id}>
              <FaTrashCan size={20} />
            </button>
          </div>
          <div className="rounded-md bg-gray-600 p-2 pb-1 hover:bg-gray-700">
            <button className="text-white" name="intent" value={'down-' + entry.id}>
              <FaCaretDown size={20} />
            </button>
          </div>
          <div className="rounded-md bg-gray-600 p-2 pt-3 pb-0 hover:bg-gray-700">
            <button className="text-white" name="intent" value={'up-' + entry.id}>
              <FaCaretUp size={20} />
            </button>
          </div>
        </div>
      </td>
    </tr>
  )
}