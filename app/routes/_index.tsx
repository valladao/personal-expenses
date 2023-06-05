import type {V2_MetaFunction} from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

// Open or close the sidebar using JavaScript
function ToggleSidebarButton() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar') as HTMLDialogElement | null;
    if (sidebar && sidebar.open) {
      sidebar.close(); // Close the sidebar dialog
    } else if (sidebar) {
      sidebar.showModal(); // Open the sidebar dialog
    }
  };

  return (
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
  );
}

export default function Index() {
  return (
    <div id="app">
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

      <main>
        <h1>Month Report</h1>
        <p>This is the content for the Month Report page.</p>
        <ToggleSidebarButton></ToggleSidebarButton>
      </main>

    </div>
  );

}
