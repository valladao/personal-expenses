import {
  FaCaretDown,
  FaCaretUp,
  FaPenToSquare,
  FaTrashCan
} from "react-icons/fa6";

export default function TableEntry({entry}: {entry: any}) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{entry.name}</td>
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