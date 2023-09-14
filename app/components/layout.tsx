import Sidebar from "./compositions/sidebar";
import ToggleSidebarButton from "./elements/toggle-sidebar-button";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex">
      <Sidebar />
      <main id="main" className="flex w-full p-4">
        <div className="flex">
          <ToggleSidebarButton text="&gt;" />
        </div>
        {children}
      </main>
    </div>
  )
}
