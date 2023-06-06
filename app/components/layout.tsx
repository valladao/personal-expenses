import Sidebar from "./sidebar";
import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Month Report</h1>
        <p>This is the content for the Month Report page.</p>
        <ToggleSidebarButton />
      </main>
    </div>
  )
}
