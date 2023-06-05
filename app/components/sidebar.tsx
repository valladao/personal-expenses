import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Sidebar() {
  return (
    <dialog id="sidebar">
      <h1>App Logo/Name</h1>

      <ul>
        <li><a href="month-report.html">Month Report</a></li>
        <li><a href="account-report.html">Account Report</a></li>
        <li><a href="register-expenses.html">Register Expenses</a></li>
        <li>
          Database
          <ul>
            <li><a href="expense-group.html">Expense Group</a></li>
            <li><a href="expense.html">Expense</a></li>
            <li><a href="account.html">Account</a></li>
            <li><a href="filter.html">Filter</a></li>
          </ul>
        </li>
      </ul>

      <ToggleSidebarButton></ToggleSidebarButton>

    </dialog>

  )
}
