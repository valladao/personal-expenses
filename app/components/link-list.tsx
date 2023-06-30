import type {LinksListType} from "./sidebar";

export default function LinkList({linkArray, listName}: {linkArray: LinksListType, listName: string}) {
  return (
    <div className="mt-5 ml-2 text-zinc-100">
      <div className="pb-1">
        {listName}
      </div>
      <ul className="list-none p-0 ml-1">
        {linkArray.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="block py-1 pl-2 hover:bg-zinc-700 hover:text-white text-zinc-100">{link.innerText}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
