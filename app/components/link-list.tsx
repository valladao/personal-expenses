import type {LinksListType} from "./sidebar";

export default function LinkList({linkArray, listName}: {linkArray: LinksListType, listName: string}) {
  return (
    <div className="mt-5 text-zinc-100">
      {listName}
      <ul className="list-none p-0 ml-4">
        {linkArray.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="block py-2 px-4 hover:bg-zinc-700 hover:text-white text-zinc-100">{link.innerText}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
