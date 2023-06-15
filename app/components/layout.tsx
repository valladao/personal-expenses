import Sidebar from "./sidebar";
import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main id="main" className="flex p-4">
        <div className="flex">
          <ToggleSidebarButton text="&gt;" />
        </div>
        <div className="flex flex-col pl-4">
          <h1 className="text-2xl font-bold text-zinc-800">Month Report</h1>
          <p className="text-zinc-800">This is the content for the Month Report page.</p>
        </div>
      </main>
    </div>
  )
}
