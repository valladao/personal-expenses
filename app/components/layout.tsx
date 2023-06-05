import Sidebar from "./sidebar";
import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Layout() {
  return (
    <>
      <Sidebar></Sidebar>
      <main>
        <h1>Month Report</h1>
        <p>This is the content for the Month Report page.</p>
        <ToggleSidebarButton></ToggleSidebarButton>
      </main>
    </>
  )
}
