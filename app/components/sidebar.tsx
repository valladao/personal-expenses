import LinkList from "./link-list";
import ToggleSidebarButton from "./toggle-sidebar-button";

const entriesLinks = [
  {
    href: 'register-expenses.html',
    innerText: 'Register Expenses'
  },
]

const reportLinks = [
  {
    href: 'month-report.html',
    innerText: 'Month Report'
  },
  {
    href: 'account-report.html',
    innerText: 'Account Report'
  },
]

const databaseLinks = [
  {
    href: 'expense-group.html',
    innerText: 'Expense Group'
  },
  {
    href: 'expense.html',
    innerText: 'Expense'
  },
  {
    href: 'account.html',
    innerText: 'Account'
  },
  {
    href: 'filter.html',
    innerText: 'Filter'
  },
]

export type LinksListType = typeof databaseLinks;

export default function Sidebar() {
  return (
    <dialog id="sidebar" className="w-64 bg-gray-200 p-4 m-0 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mr-4">Expenses App</h1>
        <ToggleSidebarButton text="&times;" />
      </div>

      <LinkList linkArray={entriesLinks} listName='Entries'></LinkList>

      <LinkList linkArray={reportLinks} listName='Reports'></LinkList>

      <LinkList linkArray={databaseLinks} listName='Database'></LinkList>

    </dialog>
  )
}
