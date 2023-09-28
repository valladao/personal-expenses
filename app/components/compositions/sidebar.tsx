import {Link} from "@remix-run/react";
import LinkList from "./link-list";
import ToggleSidebarButton from "../elements/toggle-sidebar-button";

const entriesLinks = [
  {
    href: '/register-expenses',
    innerText: 'Register Expenses'
  },
]

const reportLinks = [
  {
    href: '/month-report',
    innerText: 'Month Report'
  },
  {
    href: '/account-report',
    innerText: 'Account Report'
  },
]

const databaseLinks = [
  {
    href: '/database/expense-group',
    innerText: 'Expense Group'
  },
  {
    href: '/database/expense',
    innerText: 'Expense'
  },
  {
    href: '/database/account',
    innerText: 'Account'
  },
  {
    href: '/database/filter',
    innerText: 'Filter'
  },
]

const basicSidebarLinks = [
  {
    listName: "Entries",
    linkArray: entriesLinks
  },
  {
    listName: "Reports",
    linkArray: reportLinks
  },
  {
    listName: "Database",
    linkArray: databaseLinks
  }
]

export type LinksListType = typeof databaseLinks;

export default function Sidebar() {

  const closeOnClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (target?.id == 'sidebar' || target?.classList.contains('sidebarLink')) {
      const sidebar = document.getElementById('sidebar') as HTMLDialogElement | null;
      const main = document.getElementById('main') as HTMLElement | null;
      sidebar?.close()
      main?.classList.remove('ml-64')
    }
  }

  return (
    <dialog id="sidebar" className="w-64 bg-zinc-800 p-0 m-0 h-full max-h-fit" onClick={closeOnClick}>
      <div id="dialogBox" className="w-full h-full p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="sidebarLink text-xl font-bold mr-4 text-zinc-100">Expenses App</h1>
          </Link>
          <ToggleSidebarButton text="&times;" />
        </div>
        {
          basicSidebarLinks.map(linkList => {
            return <LinkList key={linkList.listName} linkArray={linkList.linkArray} listName={linkList.listName}></LinkList>
          })
        }
      </div>
    </dialog>
  )
}
