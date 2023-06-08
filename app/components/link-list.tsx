import type {LinksListType} from "./sidebar";

export default function LinkList({linkArray, listName}: {linkArray: LinksListType, listName: string}) {
  return (
    <>
      {listName}
      <ul className="list-none p-0 ml-4">
        {linkArray.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="block py-2 px-4 hover:bg-gray-300">{link.innerText}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
