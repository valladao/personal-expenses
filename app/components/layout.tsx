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
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-4">Month Report</h1>
          <p>This is the content for the Month Report page.</p>
        </div>
      </main>
    </div>
  )
}
