import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Sidebar() {
  return (
    <dialog id="sidebar" className="w-64 bg-gray-200 p-4 m-0 h-full">
      <h1 className="text-xl font-bold mb-4">App Logo/Name</h1>
      <ToggleSidebarButton />

      <ul className="list-none p-0">
        <li><a href="month-report.html" className="block py-2 px-4 hover:bg-gray-300">Month Report</a></li>
        <li><a href="account-report.html" className="block py-2 px-4 hover:bg-gray-300">Account Report</a></li>
        <li><a href="register-expenses.html" className="block py-2 px-4 hover:bg-gray-300">Register Expenses</a></li>
        <li className="mt-4">
          Database
          <ul className="list-none p-0 ml-4">
            <li><a href="expense-group.html" className="block py-2 px-4 hover:bg-gray-300">Expense Group</a></li>
            <li><a href="expense.html" className="block py-2 px-4 hover:bg-gray-300">Expense</a></li>
            <li><a href="account.html" className="block py-2 px-4 hover:bg-gray-300">Account</a></li>
            <li><a href="filter.html" className="block py-2 px-4 hover:bg-gray-300">Filter</a></li>
          </ul>
        </li>
      </ul>

    </dialog>
  )
}
