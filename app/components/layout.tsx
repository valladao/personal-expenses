import Sidebar from "./sidebar";
import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex">
      <Sidebar />
      <main id="main" className="flex p-4">
        <div className="flex">
          <ToggleSidebarButton text="&gt;" />
        </div>
        {children}
      </main>
    </div>
  )
}
